import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTodos, updateTodo, deleteTodo } from "./todosSlice";

export default function Todos(): JSX.Element {
  const todos = useAppSelector((state) => state.todos.todos);
  const status = useAppSelector((state) => state.todos.status);
  const error = useAppSelector((state) => state.todos.error);
  const dispatch = useAppDispatch();

  switch (status) {
    case "idle":
      return (
        <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
      );
    case "pending":
      return <h3>Fetching todos...</h3>;
    case "resolved":
      return (
        <ul className="list">
          {todos?.map((todo) => (
            <li
              className={`task ${todo.completed ? "done" : ""}`}
              key={todo.id}
              onClick={() => dispatch(updateTodo(todo.id))}
            >
              {todo.title}{" "}
              <span onClick={() => dispatch(deleteTodo(todo.id))}>X</span>
            </li>
          ))}
        </ul>
      );
    case "rejected":
      console.log(error);
      return (
        <>
          <h3>There was a problem loading your todos: {error?.message}</h3>
          <button onClick={() => dispatch(fetchTodos())}>Try Again</button>
        </>
      );
    default:
      throw new Error("This should be impossible!");
  }
}
