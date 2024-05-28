import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ text, isDone }) => {
  const [isDoing = isDone, setIsDoing] = useState(isDone);

  const changeIsDone = () => {
    setIsDoing(!isDoing);
  };

  return (
    <div className="todo-container">
      <h3>{text}</h3>
      <input
        className="checkBox"
        type="checkbox"
        value={isDoing}
        checked={isDoing}
        onChange={changeIsDone}
      />
    </div>
  );
};

export default Todo;
