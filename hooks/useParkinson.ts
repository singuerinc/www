import { useEffect, useState } from "react";

export function useParkinson(time = 25) {
  const [bool, setBool] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setBool(Math.random() > 0.2);
    }, time);
    return () => clearInterval(id);
  }, [time]);

  return [bool];
}
