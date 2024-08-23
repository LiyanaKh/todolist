import React from "react";
import "./App.css";

export default function TodoItem({ text, onClick, onToggle, completed }) {
  return (
    <div className="todo-item">
      <span
        onClick={onToggle} //функция передается в комп в качестве пропса
        className={`todo-task ${completed ? "completed" : ""}`} //вставляем выражение, проверяем значение переменной.
      >
        {text}
      </span>
      <button onClick={onToggle} className="toggle-button">
        ✔
      </button>
      <span className="cross-icon" onClick={onClick}>
        ×
      </span>
    </div>
  );
}
