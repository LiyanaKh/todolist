import { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

export default function TodoList() {
  //компонент экспортируется по умолчанию
  const [task, setTask] = useState(""); //хранит текст для новой задачи, который вводит пользователь. текущее поле ввода
  const [taskList, setTaskList] = useState([]); //хранит список (массив) задач

  const handleDelete = (id) => {
    //принимает аргумент задачи которую необходимо удалить
    console.log("idd", id);

    setTaskList(taskList.filter((text) => text.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTaskList((prevState) =>  
      prevState.map(
        (text) =>
          text.id === id ? { ...text, completed: !text.completed } : text //...text  расширения
      )
    );
  };

  console.log("taskList", taskList);

  return (
    <div className="todo-list">
      <h2>My To Do List</h2>

      <div className="input-container">
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        {/**/}
        <button
          onClick={() => {
            setTaskList([
              //cоздается новый массив, копирует все текущие задачи в новый массив.
              {
                id:
                  taskList.length === 0
                    ? 0
                    : taskList[taskList.length - 1].id + 1,
                text: task,
              },
              ...taskList,
            ]); //
            setTask("");
          }}
        >
          add
        </button>

        <ul>
          {taskList.map((task) => (
            //проходит по каждому элементу массива taskList и для каждого элемента создает компонент
            <TodoItem
              key={task.id} //уникальной идентификации элементов
              text={task.text} //передается как пропс
              onClick={() => handleDelete(task.id)} //передается как функция
              onToggle={() => handleToggleComplete(task.id)} //передает функцию
              completed={task.completed} //передает состояние
            />
          ))}
        </ul>
        {/*<h3 className="footer-title">List of Works ToDo:</h3>*/}
      </div>
    </div>
  );
}

/* useState — это хук React, который позволяет функциональным компонентам использовать состояние (state). 
Когда вызывается useState, создается переменная состояния и функция для ее обновления.
onChange - функция обработчик*/
