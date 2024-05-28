import React, { useState } from "react";

const Todo = ({ text, isDone, deleteTodo }) => {
  const [isDoing = isDone, setIsDoing] = useState(isDone);

  const changeIsDone = () => {
    setIsDoing(!isDoing);
  };

  return (
    <div className="todo-container" onDoubleClick={deleteTodo}>
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
