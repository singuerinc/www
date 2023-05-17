"use client";
import { IconCircle, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const shuffle = (o: any[]) => {
  const arr = [...o];
  for (
    let j, x, i = arr.length;
    i;
    j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
  );
  return arr;
};

type PlayerX = "x";
type PlayerO = "o";
type BoardValue = null | PlayerX | PlayerO;

// prettier-ignore
const initBoard:BoardValue[] = [
    null, null, null,
    null, null, null,
    null, null, null,
  ]

function isWinner(board: BoardValue[]) {
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

export function TicTacToe() {
  const [wins, setWins] = useState<{ x: number; o: number }>({ x: 0, o: 0 });
  const [player, setPlayer] = useState<PlayerX | PlayerO>("x");
  const [board, setBoard] = useState(initBoard);

  const emptySquares = useMemo(
    () =>
      board.reduce(
        (acc, c, idx) => (c === null ? [...acc, idx] : acc),
        [] as number[]
      ),
    [board]
  );

  const reset = useCallback((winner: BoardValue) => {
    console.log("reset");
    if (winner !== null) {
      setWins((w) => {
        const ww = { ...w };
        ww[winner]++;
        return ww;
      });
    }
    setBoard(initBoard);
    setPlayer("x");
  }, []);

  const updateBoard = useCallback(
    (idx: number) =>
      (p: "x" | "o", wins: { x: number; o: number }, board: BoardValue[]) => {
        const canPlay = board[idx] === null;
        if (canPlay) {
          setPlayer(p === "o" ? "x" : "o");
          setBoard(board.map((v, i) => (idx === i ? p : v)));
        }
      },
    []
  );

  useEffect(() => {
    const winner = isWinner(board);
    console.log({ winner });

    if (winner !== null) {
      console.log("here1");
      setTimeout(() => reset(winner), 1000);
    }
    // } else if (emptySquares.length === 0) {
    //   console.log("here2");
    //   setTimeout(() => reset(null), 1000);
    // }
  }, [board, emptySquares.length, reset]);

  useEffect(() => {
    if (player === "x") {
      // warning: smart ai here
      if (emptySquares.length > 0) {
        updateBoard(shuffle(emptySquares)[0])("x", wins, board);
      }
    }
  }, [board, emptySquares, player, updateBoard, wins]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="flex flex-col items-center justify-center mx-48 shrink-0"
    >
      <h2 className="mb-4">Wanna play?</h2>

      <div className="relative grid grid-cols-3 grid-rows-3 gap-2">
        <div className="absolute top-0 w-px h-full bg-gray-500 left-1/3" />
        <div className="absolute top-0 w-px h-full bg-gray-500 left-2/3" />
        <div className="absolute left-0 w-full h-px bg-gray-500 top-1/3" />
        <div className="absolute left-0 w-full h-px bg-gray-500 top-2/3" />
        {board.map((v, i) => (
          <div
            key={i}
            onClick={() => updateBoard(i)("o", wins, board)}
            className={`flex items-center justify-center w-24 aspect-square cursor-pointer ${
              board[i] !== null ? "pointer-events-none" : "pointer-events-auto"
            }`}
          >
            {v === "x" ? (
              <IconX size={64} />
            ) : v === "o" ? (
              <IconCircle size={64} color="red" />
            ) : null}
          </div>
        ))}
      </div>
      <p className="m-0 mt-2">
        <span className="font-semibold">You</span> {wins["o"]} vs.{" "}
        <span className="font-semibold">AI</span> {wins["x"]}
      </p>
    </motion.div>
  );
}
