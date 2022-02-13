import {
  Action,
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import axios from "axios";

import type { Todo, UpdateTodoAction, DeleteTodoAction } from "./types";

export interface TodosState {
  todos: Todo[];
  status: "idle" | "pending" | "resolved" | "rejected";
  error?: SerializedError | null;
}

const initialState: TodosState = {
  todos: [],
  status: "idle",
  error: null,
};

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axios.get<Todo[]>(url);
  return res.data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateTodo: (state, action: UpdateTodoAction) => {
      const idx = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[idx] = action.payload;
    },
    deleteTodo: (state, action: DeleteTodoAction) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "resolved";
        state.todos = state.todos.concat(action.payload);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export const { updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
