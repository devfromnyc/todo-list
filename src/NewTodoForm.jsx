import React, { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newTitle, setNewTitle] = useState("");
  const [newInfo, setNewInfo] = useState("");
  const [newLink, setNewLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTitle === "" || newInfo === "") return;

    const newItemObj = {
      title: newTitle,
      info: newInfo,
      link: newLink,
    };

    onSubmit(newItemObj);

    setNewTitle("");
    setNewInfo("");
    setNewLink("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" className="todo-header">
          New Todo
        </label>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          id="item"
          required
          validate="true"
        />
        <label htmlFor="info" className="todo-header">
          Todo Info
        </label>
        <input
          value={newInfo}
          onChange={(e) => setNewInfo(e.target.value)}
          type="text"
          id="info"
          required
          validate="true"
        />
        <label htmlFor="link" className="todo-header">
          Link (if applicable)
        </label>
        <input
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          type="url"
          id="link"
          validate="true"
        />
      </div>
      <button className="btn blue darken-3">Create Todo Item</button>
    </form>
  );
}
