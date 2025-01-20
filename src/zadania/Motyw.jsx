import { useState } from "react";

export const Motyw = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      style={
        isDark ? { backgroundColor: "black" } : { backgroundColor: "white" }
      }
    >
      <h1 style={isDark ? { color: "white" } : { color: "black" }}>
        To jest tekst
      </h1>

      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Zmień na jasny" : "Zmień na ciemny"}
      </button>
    </div>
  );
};
