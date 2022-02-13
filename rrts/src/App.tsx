import * as React from "react";

import logo from "./logo.svg";
import "./App.css";
import { useLazyFetchTodosQuery } from "./features/todos/todosSlice";

function App(): JSX.Element {
  const [trigger, result] = useLazyFetchTodosQuery();
  const { data, isFetching } = result;

  return (
    <div className="App">
      <button onClick={() => trigger()}>Fetch</button>
      <h1>Number of todos fetched: {data?.length}</h1>
      {data?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
