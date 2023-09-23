import React, { useState, useEffect } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todoObj) {
    const title = todoObj.title;
    const info = todoObj.info;
    const link = todoObj.link;
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, info, link, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed, key) {
    if (key === "Enter" && completed == false) {
      completed = true;
    } else if (key === "Enter" && completed == true) {
      completed = false;
    }
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <React.Fragment>
      <main>
        <h1>React To-do List App!</h1>
        <p className="todo-header-paragraph">
          Hello! And welcome to my To-do List Web Application powered by React
          and Vite! In this app, you'll notice three different input type
          fields. The first input field designates the title of the task you
          want to add followed by a general input option to add any supporting
          information for your todo and last but not least, a link to an
          external document if necessary.
        </p>
        <NewTodoForm onSubmit={addTodo} />
        <h2 className="header">List of To-dos</h2>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </main>
    </React.Fragment>
  );
}
