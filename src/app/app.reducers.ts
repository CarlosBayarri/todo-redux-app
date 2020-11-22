import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducers';
import { valid_filters } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducers';

export interface AppState {
    todos: Todo[],
    filter: valid_filters
}



export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}