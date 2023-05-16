"use client";
import { IconCircle, IconRepeat, IconX } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";

const shuffle = (o: any[]) => {
  const arr = [...o];
  for (
    let j, x, i = arr.length;
    i;
    j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
  );
  return arr;
};

// prettier-ignore
const initBoard = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ]

function isWinner(board: number[]) {
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
  const [winner, setWinner] = useState(false);
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState(initBoard);

  const reset = useCallback(() => {
    setPlayer(1);
    setWinner(false);
    setBoard(initBoard);
  }, []);

  const updateBoard = useCallback(
    (idx: number) => (player: number) => {
      const canPlay = board[idx] === 0 && !winner;
      if (canPlay) {
        setBoard((b) => b.map((v, i) => (idx === i ? player : v)));
        setPlayer((p) => (p === 1 ? 2 : 1));
      }
    },
    [board, winner]
  );

  const cpuPlay = useCallback(() => {
    // warning: smart AI here
    const emptySquares = board.reduce(
      (acc, c, idx) => (c === 0 ? [...acc, idx] : acc),
      [] as number[]
    );

    if (emptySquares.length > 0) {
      updateBoard(shuffle(emptySquares)[0])(1);
    }
  }, [board, updateBoard]);

  useEffect(() => {
    if (player === 1) {
      cpuPlay();
    }
  }, [cpuPlay, player]);

  useEffect(() => {
    if (isWinner(board)) {
      setWinner(true);
      setTimeout(() => reset(), 1000);
    }
  }, [board, player, reset]);

  return (
    <div className="flex flex-col items-center justify-center shrink-0">
      <div className="relative grid grid-cols-3 grid-rows-3 gap-2">
        <div className="absolute top-0 w-px h-full bg-gray-500 left-1/3" />
        <div className="absolute top-0 w-px h-full bg-gray-500 left-2/3" />
        <div className="absolute left-0 w-full h-px bg-gray-500 top-1/3" />
        <div className="absolute left-0 w-full h-px bg-gray-500 top-2/3" />
        {board.map((v, i) => (
          <div
            key={i}
            onClick={() => updateBoard(i)(2)}
            className="flex items-center justify-center w-24 aspect-square"
          >
            {v === 1 ? (
              <IconX size={64} />
            ) : v === 2 ? (
              <IconCircle size={64} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
