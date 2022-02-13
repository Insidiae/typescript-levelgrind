import { Action } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface UpdateTodoAction extends Action {
  payload: Todo;
}

export interface DeleteTodoAction extends Action {
  payload: number;
}
