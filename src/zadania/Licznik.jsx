import { useState } from "react";

export const Licznik = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>dodaj</button>
      <button onClick={() => setCounter(counter - 1)}>odejmij</button>
      <button onClick={() => setCounter(0)}>reset</button>
    </div>
  );
};
