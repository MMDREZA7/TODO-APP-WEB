import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./todo.css";

const Todo = ({ text, isDone, deleteTodo, renameTodo }) => {
  const [isDoing = isDone, setIsDoing] = useState(isDone);

  const changeIsDone = () => {
    setIsDoing(!isDoing);
  };

  return (
    <div className="todo-container">
      <div className="todo-checkbox-name">
        {/* Check Box */}
        <div className="todo-checkbox-container">
          <input
            className="checkBox-todo"
            type="checkbox"
            value={isDoing}
            checked={isDoing}
            onChange={changeIsDone}
          />
        </div>
        {/* Name */}
        <div className="todo-name-container">
          <h3 className="todo-name">{text}</h3>
        </div>
      </div>
      <div className="todo-btns">
        {/* Delete */}
        <div className="delete-btn-container">
          <button onClick={deleteTodo} className="btn delete-btn">
            ❌
          </button>
        </div>
        {/* Rename */}
        <div className="rename-btn-container">
          <button onClick={renameTodo} className="btn rename-btn">
            🖊
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
