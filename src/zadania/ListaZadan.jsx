import { useState } from "react";

export const ListaZadan = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const addHandler = () => {
    setTasks([...tasks, text]);
    setText("");
  };
  const deleteHandler = (text) => {
    const newArray = tasks.filter((item) => item !== text);
    setTasks(newArray);
    console.log(tasks)
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Wpisz zadanie"
      />
      <button onClick={addHandler}>Dodaj</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteHandler(item)}>Usun</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
