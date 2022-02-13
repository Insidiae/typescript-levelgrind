import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  status: "idle" | "pending" | "resolved" | "rejected";
  error?: Error | null;
}

const baseUrl = "https://jsonplaceholder.typicode.com";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTodos: builder.query<Todo[], number | void>({
        query: () => "/todos",
      }),
    };
  },
});

export const { useLazyFetchTodosQuery } = apiSlice;
