import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Todo from "../todo/Todo";
import "./Todos.css";

const Todos = () => {
  const [todoList, setTodoList] = useState([
    { todoText: "read book", isDone: false },
    { todoText: "Fix application bugs", isDone: true },
    { todoText: "Go Shopping", isDone: true },
    { todoText: "Go work", isDone: false },
  ]);

  const [newTodoText, setNewTodoText] = useState("");
  const [newTodoIsDone, setNewTodoisDone] = useState(false);

  // F U N C T I O N S

  const changeTextInputValue = (e) => {
    const todoText = setNewTodoText(e.nativeEvent.target.value);
    return { todoText: todoText, newTodoIsDone: false };
  };

  // add todo to list
  const addNewTodo = (todo) => {
    setTodoList([...todoList, ...todo]);
    setNewTodoText("");
  };

  // remove todo from list
  const removeTodo = () => {};

  // rename todo
  const renameTodo = () => {};

  return (
    <div className="todos-container">
      <h1>TODO Tracker</h1>
      <div className="addTodo-container">
        <input
          type="text"
          placeholder="Todo Name"
          value={newTodoText}
          onChange={(e) => changeTextInputValue(e)}
          checked={newTodoText}
        />
        <button>Add Todo</button>
      </div>
      {todoList.map((todo, index) => (
        <Todo text={todo.todoText} isDone={todo.isDone} key={index} />
      ))}
    </div>
  );
};

export default Todos;
