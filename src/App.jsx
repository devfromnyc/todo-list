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

  function toggleTodo(id, completed) {
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
        <h1>Steve Madden Todos</h1>
        <NewTodoForm onSubmit={addTodo} />
        <h2 className="header">Todo List</h2>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </main>
    </React.Fragment>
  );
}
