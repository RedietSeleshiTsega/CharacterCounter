import { useState, useEffect, useMemo, useCallback } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const limit = 200;

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  const handleChange = useCallback((e) => {
    setText(e.target.value.slice(0, limit));
  }, []);

  const progress = useMemo(() => (count / limit) * 100, [count, limit]);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <textarea
        value={text}
        onChange={handleChange}
        rows="5"
        cols="40"
        placeholder="Type here..."
      />
      <p>{count}/{limit} characters</p>
      <div style={{ height: "10px", background: "#ddd", borderRadius: "5px", overflow: "hidden" }}>
        <div style={{ width: `${progress}%`, background: "blue", height: "100%" }}></div>
      </div>
    </div>
  );
}
