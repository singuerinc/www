import { useEffect, useState } from "react";

export function useParkinson(time = 25, possibility = 0.2) {
  const [bool, setBool] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setBool(Math.random() < possibility);
    }, time);
    return () => clearInterval(id);
  }, [time, possibility]);

  return [bool];
}
