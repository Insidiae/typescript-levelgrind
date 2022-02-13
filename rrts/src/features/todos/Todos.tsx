import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTodos, updateTodo, deleteTodo } from "./todosSlice";
import { Todo } from "./types";

export default function Todos(): JSX.Element {
  const todos = useAppSelector((state) => state.todos.todos);
  const status = useAppSelector((state) => state.todos.status);
  const error = useAppSelector((state) => state.todos.error);
  const dispatch = useAppDispatch();

  function onUpdateTodo(todo: Todo) {
    const editedTodo: Todo = {
      ...todo,
      // title: "DONE",
      completed: !todo.completed,
    };

    dispatch(updateTodo(editedTodo));
  }

  function onDeleteTodo(event: React.MouseEvent, id: number) {
    event.stopPropagation();
    dispatch(deleteTodo(id));
  }

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
              onClick={() => onUpdateTodo(todo)}
            >
              {todo.title}{" "}
              <span onClick={(event) => onDeleteTodo(event, todo.id)}>X</span>
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
