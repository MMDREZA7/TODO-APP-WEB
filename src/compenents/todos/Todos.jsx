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
  const [newTodoIsDone, setNewTodoIsDone] = useState(false);

  // F U N C T I O N S

  // GET VALUE from TextInput
  const changeTextInputValue = (event) => {
    setNewTodoText(event.target.value);
  };

  // ADD NEW TODO
  const addNewTodo = (event) => {
    event.preventDefault();

    // Add new Todo in list
    const todo = { todoText: newTodoText, inDone: false };
    setTodoList([...todoList, todo]);

    // Reset the text input
    setNewTodoText("");
  };

  // DELETE TODO
  const deleteTodo = (index) => {
    const updatedItems = [...todoList];
    updatedItems.splice(index, 1);
    setTodoList(updatedItems);

    console.log("Deleted ✔");
  };

  return (
    <div className="todos-container">
      <h1 className="main-title">TODO Tracker</h1>

      <form onSubmit={addNewTodo} className="add-todo-form">
        <div>
          <label className="label">Todo Name</label>
          <input
            className="new-todo-input"
            type="text"
            placeholder="Enter Your Todo Name"
            value={newTodoText}
            onChange={(e) => changeTextInputValue(e)}
          />
        </div>
        <button type="submit" className="btn submit">
          Add Todo
        </button>
      </form>
      {todoList.map((todo, index) => (
        <Todo
          text={todo.todoText}
          isDone={todo.isDone}
          key={index}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
};

export default Todos;
