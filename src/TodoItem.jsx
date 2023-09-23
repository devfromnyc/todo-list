export function TodoItem({
  completed,
  id,
  title,
  link,
  info,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          onKeyUp={(e) => toggleTodo(id, e.target.checked, e.key)}
        />
        <p className="title">
          {title} {completed && "complete!"}
        </p>
      </label>
      {info ? <p>Info: {info}</p> : "Info N/A"}
      {link ? (
        <div>
          Link: <a href={link}>{link}</a>
        </div>
      ) : (
        <p>Link: N/A</p>
      )}
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete Todo
      </button>
    </li>
  );
}
