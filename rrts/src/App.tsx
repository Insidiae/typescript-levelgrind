import * as React from "react";

import { fetchTodos } from "./features/todos/todosSlice";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";

function App(): JSX.Element {
  const todos = useAppSelector((state) => state.todos.todos);
  const status = useAppSelector((state) => state.todos.status);
  const error = useAppSelector((state) => state.todos.error);
  const dispatch = useAppDispatch();

  function onFetchTodos() {
    dispatch(fetchTodos());
  }

  return (
    <div className="App">
      <header>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>A simple todo list app built with React + Redux Toolkit</h2>
      </header>

      <button onClick={() => onFetchTodos()}>Fetch Todos</button>
      <ul className="list">
        {todos?.map((todo) => (
          <li className="task" key={todo.id}>
            {todo.title} <span>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
