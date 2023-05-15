import { useEffect, useState } from "react";

export function useIntermittent(time = 1000) {
  const [bool, setBool] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setBool((b) => !b);
    }, time);
    return () => clearInterval(id);
  }, [time]);

  return [bool];
}
