import { useState } from "react";

export const Liczba = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [random, setRandom] = useState(0);

  const generateHandler = () => {
    const startNumber = parseInt(start, 10);
    const endNumber = parseInt(end, 10);

    if (isNaN(startNumber) || isNaN(endNumber) || startNumber > endNumber) {
      alert("Podaj poprawny zakres!");
      return;
    }

    setRandom(Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="poczatek"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="number"
        placeholder="koniec"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={generateHandler}>Losuj</button>
      <p>{random}</p>
    </div>
  );
};
