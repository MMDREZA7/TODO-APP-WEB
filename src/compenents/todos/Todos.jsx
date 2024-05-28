import React, { useState } from "react";
import Todo from "../todo/Todo";

const Todos = () => {
  const [todoList, setTodoList] = useState([
    { todoText: "read book", isDone: false },
    { todoText: "Fix application bugs", isDone: true },
    { todoText: "Go Shopping", isDone: true },
    { todoText: "Go work", isDone: false },
  ]);

  const [newTodoText, setNewTodoText] = useState("");
  const [newTodoName, setNewTodoName] = useState("");
  const [state, setState] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle input change
  const changeTextInputValue = (event) => {
    state
      ? setNewTodoName(event.target.value)
      : setNewTodoText(event.target.value);
  };

  // Function to add a new todo
  const addNewTodo = (event) => {
    event.preventDefault();

    // Add new todo to the list
    const todo = { todoText: newTodoText, isDone: false };
    setTodoList([...todoList, todo]);

    // Reset the text input
    setNewTodoText("");
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedItems = [...todoList];
    updatedItems.splice(index, 1);
    setTodoList(updatedItems);
  };

  // Function to rename a todo
  const renameTodo = (event, index) => {
    event.preventDefault();

    const updatedItems = [...todoList];
    updatedItems[index] = { ...updatedItems[index], todoText: newTodoName };
    setTodoList(updatedItems);
    setNewTodoName("");
    setEditIndex(null);
    setState(false);
  };

  const changeState = (index) => {
    setEditIndex(index);
    setState(true);
    setNewTodoName(todoList[index].todoText);
  };

  return (
    <div className="todos-container">
      <h1 className="main-title">TODO Tracker</h1>

      {/* Add New Todo */}
      <form
        onSubmit={state ? (event) => renameTodo(event, editIndex) : addNewTodo}
        className="add-todo-form"
      >
        <div>
          <label className="label">{state ? "Rename Todo" : "Todo Name"}</label>
          <input
            className="new-todo-input"
            type="text"
            placeholder={state ? "Enter New Name" : "Enter Your Todo Name"}
            value={state ? newTodoName : newTodoText}
            onChange={(e) => changeTextInputValue(e)}
          />
        </div>
        <button type="submit" className="btn submit">
          {state ? "Rename" : "Add Todo"}
        </button>
      </form>
      {todoList.map((todo, index) => (
        <Todo
          text={todo.todoText}
          isDone={todo.isDone}
          key={index}
          deleteTodo={() => deleteTodo(index)}
          renameTodo={() => changeState(index)}
        />
      ))}
    </div>
  );
};

export default Todos;
