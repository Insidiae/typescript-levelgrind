import Todos from "./features/todos/Todos";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <header>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>A simple todo list app built with React + Redux Toolkit</h2>
      </header>

      <Todos />
    </div>
  );
}

export default App;
