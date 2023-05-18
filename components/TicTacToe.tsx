"use client";
import { IconCircle, IconDeviceGamepad, IconX } from "@tabler/icons-react";
import { useMachine, useSelector } from "@xstate/react";
import { motion } from "framer-motion";
import { useCallback, useMemo } from "react";
import { assign, createMachine } from "xstate";

type PlayerX = "x";
type PlayerO = "o";
type BoardValue = null | PlayerX | PlayerO;

function getWinner(board: BoardValue[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

// prettier-ignore
const initBoard:BoardValue[] = [
  null, null, null,
  null, null, null,
  null, null, null,
]

function shuffle<T>(o: T[]) {
  const arr = [...o];
  for (
    let j, x, i = arr.length;
    i;
    j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
  );
  return arr;
}

const emptySquares = (board: BoardValue[]) =>
  board.reduce(
    (acc, c, idx) => (c === null ? [...acc, idx] : acc),
    [] as number[]
  );

const machine = createMachine<{
  lastPlayer?: PlayerO | PlayerX;
  board: BoardValue[];
  winsX: number;
  winsO: number;
}>(
  {
    predictableActionArguments: true,
    initial: "playerOTurn",
    context: {
      board: initBoard,
      winsX: 0,
      winsO: 0,
    },
    states: {
      done: {
        after: {
          2000: {
            target: "playerOTurn",
            actions: ["reset"],
          },
        },
      },
      check: {
        always: [
          {
            target: "done",
            actions: ["setWinner"],
            cond: "hasWinner",
          },
          {
            target: "done",
            cond: "cantContinue",
          },
          {
            target: "playerXTurn",
            cond: "lastO",
          },
          {
            target: "playerOTurn",
          },
        ],
      },
      playerXTurn: {
        on: {
          UPDATE_BOARD: [
            {
              actions: ["lastPlayerX", "addX"],
              target: "check",
            },
          ],
        },
      },
      playerOTurn: {
        after: {
          500: [{ actions: ["lastPlayerO", "addRandomO"], target: "check" }],
        },
      },
    },
  },
  {
    actions: {
      setWinner: assign((ctx) => {
        if (getWinner(ctx.board) === "x") {
          return { winsX: ++ctx.winsX };
        } else {
          return { winsO: ++ctx.winsO };
        }
      }),
      lastPlayerO: assign(() => ({ lastPlayer: "o" })),
      lastPlayerX: assign(() => ({ lastPlayer: "x" })),
      addX: assign((ctx, e) => ({
        board: ctx.board.map((v, i) => (e.idx === i ? "x" : v)),
      })),
      addRandomO: assign((ctx) => {
        const idx = shuffle(emptySquares(ctx.board))[0];
        return {
          board: ctx.board.map((v, i) => (idx === i ? "o" : v)),
        };
      }),
      reset: assign(() => ({ board: initBoard })),
    },
    guards: {
      lastO: (ctx) => ctx.lastPlayer === "o",
      cantContinue: (ctx) => emptySquares(ctx.board).length === 0,
      hasWinner: (ctx) => getWinner(ctx.board) !== null,
    },
  }
);

export function TicTacToe() {
  const m = useMemo(() => machine, []);
  const [state, send, actor] = useMachine(m);
  const enabled = state.matches("playerXTurn");
  const board = useSelector(actor, (s) => s.context.board);
  const winsX = useSelector(actor, (s) => s.context.winsX);
  const winsO = useSelector(actor, (s) => s.context.winsO);
  const updateBoard = useCallback(
    (idx: number) => () => {
      send({ type: "UPDATE_BOARD", idx });
    },
    [send]
  );

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="flex flex-col justify-center text-orange-800 gap-y-2 shrink-0"
    >
      <div className="flex flex-col items-center justify-center p-6 border-2 border-orange-600 rounded-lg">
        <div className="relative grid grid-cols-3 grid-rows-3 gap-2">
          <div className="absolute top-0 w-0.5 h-full bg-orange-800 left-1/3" />
          <div className="absolute top-0 w-0.5 h-full bg-orange-800 left-2/3" />
          <div className="absolute left-0 w-full h-0.5 bg-orange-800 top-1/3" />
          <div className="absolute left-0 w-full h-0.5 bg-orange-800 top-2/3" />
          {board.map((v, i) => (
            <div
              key={i}
              onClick={updateBoard(i)}
              className={`flex group items-center justify-center w-24 aspect-square ${
                !enabled || board[i] !== null
                  ? "pointer-events-none"
                  : "pointer-events-auto cursor-pointer"
              }`}
            >
              <IconX
                className="hidden opacity-50 lg:group-hover:block"
                size={64}
              />
              {v === "x" ? (
                <IconX size={64} />
              ) : v === "o" ? (
                <IconCircle size={64} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <p className="flex m-0 gap-x-2">
        <span className="font-semibold">You</span> <span>{winsX}</span>
        <span>vs.</span>
        <span className="font-semibold">AI</span> <span>{winsO}</span>
      </p>
    </motion.li>
  );
}
