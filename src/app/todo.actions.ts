import {
  createAction,
  createReducer,
  createSelector,
  props,
  on,
} from '@ngrx/store';
import produce from 'immer';
import { AppState } from './app.module';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoPayload {
  todos: Todo[];
}

//  for component dispatch
export const loadTodos = createAction('[Todo] load');

//  for effect success
export const loadTodosSuccess = createAction(
  '[Todo] load success',
  props<TodoPayload>()
);

//  for effect failure
export const loadTodosFailure = createAction(
  '[Todo] load failure',
  props<{ error: string }>()
);

export interface TodoFeature {
  todos: Todo[];
  error: string | null;
}

const initialTodoState: TodoFeature = {
  todos: [],
  error: null,
};

export const selectTodoFn = (state: AppState) => {
  return state.todoSlice;
};

export const todoSelector = createSelector(selectTodoFn, (cf) => cf.todos);

export const todoErrorMessageSelector = createSelector(
  selectTodoFn,
  (cf) => cf.error
);

export const todoReducer = createReducer(
  initialTodoState,
  on(loadTodosSuccess, (state, action) => {
    return produce(state, (d) => {
      d.todos = action.todos;
      d.error = null;
    });
  }),
  on(loadTodosFailure, (state, action) => {
    return produce(state, (d) => {
      d.error = action.error;
    });
  })
);
