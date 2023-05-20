"use client";
import {
  IconMoodConfuzed,
  IconMoodEmptyFilled,
  IconMoodHappyFilled,
  IconMoodNeutral,
  IconMoodSadFilled,
  IconMoodSadSquint,
  IconMoodSick,
  IconMoodSmileFilled,
} from "@tabler/icons-react";
import { useMachine, useSelector } from "@xstate/react";
import { useCallback, useMemo } from "react";
import { assign, createMachine } from "xstate";

function shuffle<T>(o: T[]) {
  const arr = [...o];
  for (
    let j, x, i = arr.length;
    i;
    j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
  );
  return arr;
}

// prettier-ignore
const initBoard = [
    0, 0, 1, 1,
    2, 2, 3, 3,
    4, 4, 5, 5,
    6, 6, 7, 7,
  ]

// prettier-ignore
const initRevealedBoard = [
    -1, -1, -1, -1,
    -1, -1, -1, -1,
    -1, -1, -1, -1,
    -1, -1, -1, -1,
  ]

const colors: Record<number, string> = {
  0: "bg-red-500",
  1: "bg-green-500",
  2: "bg-blue-500",
  3: "bg-yellow-500",
  4: "bg-orange-500",
  5: "bg-violet-500",
  6: "bg-pink-500",
  7: "bg-cyan-500",
};

const icons: Record<number, React.ReactNode> = {
  0: <IconMoodSmileFilled size={"70%"} color="white" />,
  1: <IconMoodEmptyFilled size={"70%"} color="white" />,
  2: <IconMoodHappyFilled size={"70%"} color="white" />,
  3: <IconMoodSadFilled size={"70%"} color="white" />,
  4: <IconMoodNeutral size={"70%"} color="white" />,
  5: <IconMoodConfuzed size={"70%"} color="white" />,
  6: <IconMoodSick size={"70%"} color="white" />,
  7: <IconMoodSadSquint size={"70%"} color="white" />,
};

type RevealEvent = { type: "REVEAL"; idx: number; v: number };

const machine = createMachine<
  {
    moves: number;
    board: number[];
    revealedBoard: number[];
    firstRevealed: [number, number];
    secondRevealed: [number, number];
  },
  RevealEvent
>(
  {
    predictableActionArguments: true,
    initial: "first",
    context: {
      moves: 0,
      board: initBoard,
      revealedBoard: initRevealedBoard,
      firstRevealed: [-1, -1],
      secondRevealed: [-1, -1],
    },
    entry: ["reset"],
    states: {
      first: {
        always: [
          {
            actions: ["reset"],
            cond: "noMoreReveals",
          },
        ],
        on: {
          REVEAL: {
            target: "second",
            actions: ["addMove", "revealFirst"],
          },
        },
      },
      second: {
        on: {
          REVEAL: {
            target: "check",
            actions: ["addMove", "revealSecond"],
          },
        },
      },
      check: {
        after: {
          1000: [
            {
              target: "first",
              actions: ["markAsRevealed"],
              cond: "areEqual",
            },
            {
              target: "first",
              actions: ["cleanUp"],
            },
          ],
        },
      },
    },
  },
  {
    guards: {
      noMoreReveals: (ctx) =>
        ctx.revealedBoard.filter((v) => v === -1).length === 0,
      areEqual: (ctx) => ctx.firstRevealed[1] === ctx.secondRevealed[1],
    },
    actions: {
      reset: assign(() => ({
        moves: 0,
        board: shuffle(initBoard),
        revealedBoard: [...initRevealedBoard],
        firstRevealed: [-1, -1],
        secondRevealed: [-1, -1],
      })),
      markAsRevealed: assign((ctx) => {
        const r = ctx.revealedBoard;
        r[ctx.firstRevealed[0]] = ctx.board[ctx.firstRevealed[1]];
        r[ctx.secondRevealed[0]] = ctx.board[ctx.secondRevealed[1]];
        return {
          revealedBoard: ctx.board.map((_, idx) => r[idx]),
        };
      }),
      addMove: assign((ctx) => ({
        moves: ctx.moves + 1,
      })),
      revealFirst: assign((_, e) => ({
        firstRevealed: [e.idx, e.v],
      })),
      revealSecond: assign((_, e) => ({
        secondRevealed: [e.idx, e.v],
      })),
      cleanUp: assign(() => ({
        firstRevealed: [-1, -1],
        secondRevealed: [-1, -1],
      })),
    },
  }
);

export function Pairs() {
  const m = useMemo(() => machine, []);
  const [, send, actor] = useMachine(m);
  const moves = useSelector(actor, (state) => state.context.moves);
  const board = useSelector(actor, (state) => state.context.board);
  const revealedBoard = useSelector(
    actor,
    (state) => state.context.revealedBoard
  );
  const firstRevealed = useSelector(
    actor,
    (state) => state.context.firstRevealed
  );
  const secondRevealed = useSelector(
    actor,
    (state) => state.context.secondRevealed
  );
  const onReveal = useCallback(
    (idx: number, v: number) => () => {
      send({ type: "REVEAL", idx, v });
    },
    [send]
  );

  return (
    <div className="flex flex-col justify-center gap-y-2 shrink-0 w-full lg:w-[20rem]">
      <div className="flex justify-between">
        <h3 className="font-semibold">Memo • ry • ji</h3>
        <h3 className="font-semibold">moves: {moves}</h3>
      </div>
      <div className="grid w-full grid-cols-4">
        {board.map((v, idx) => (
          <div
            key={idx}
            className={`flex border border-gray-700 justify-center items-center aspect-square`}
          >
            <Pic
              isRevealed={
                revealedBoard[idx] !== -1 ||
                firstRevealed[0] === idx ||
                secondRevealed[0] === idx
              }
              onReveal={onReveal(idx, v)}
              icon={icons[v]}
              color={colors[v]}
            />
          </div>
        ))}
      </div>
      <p className="text-gray-500">
        Emoji Memory Game: Test your memory and match colorful emojis in this
        addictive puzzle!
      </p>
    </div>
  );
}

function Pic({
  icon,
  color,
  onReveal,
  isRevealed,
}: {
  icon: React.ReactNode;
  color: string;
  onReveal: () => void;
  isRevealed: boolean;
}) {
  return (
    <button
      className={`w-full flex justify-center items-center aspect-square ${
        isRevealed ? color : ``
      }`}
      onClick={() => {
        onReveal();
      }}
    >
      {isRevealed ? icon : <span className="text-gray-700">?</span>}
    </button>
  );
}
