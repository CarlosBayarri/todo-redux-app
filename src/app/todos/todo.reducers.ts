import { createReducer, on } from '@ngrx/store';
import { createTodo, toggleTodo, editTodo, deleteTodo, toggleAll, deleteAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Save the world')
];

const _todoReducer = createReducer(initialState,
    on(createTodo, (state, {title}) => [...state, new Todo(title)]),
    on(toggleTodo, (state, {id}) => {
        return state.map(todo => {
            if (todo.id === id) {
                // return todo.completed = !todo.completed --> No!, avoid mutable object
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        })
    }),
    on(editTodo, (state, {id, title}) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: title
                }
            } else {
                return todo;
            }
        })
    }),
    on(deleteTodo, (state, {id}) => state.filter(todo => todo.id !== id)),
    on(deleteAll, (state) => state.filter(todo => !todo.completed)),
    on(toggleAll, (state, {completed}) => {
        return state.map(todo => {
            return {
                ...todo,
                completed: completed
            }
          
        })
    })

);

export function todoReducer(state, action) {
    return _todoReducer(state,action);
}