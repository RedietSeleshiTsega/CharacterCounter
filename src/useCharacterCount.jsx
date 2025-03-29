import { useState, useEffect } from "react";

export default function useCharacterCount(text) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  return count;
}
