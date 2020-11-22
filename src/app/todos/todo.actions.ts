import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[TODO create todo]', props<{title: string}>());

export const toggleTodo = createAction('[TODO] Toggle Todo]', props<{id: number}>());

export const editTodo = createAction('[TODO editTodo]', props<{id:number, title: string}>());

export const deleteTodo = createAction('[TODO deleteTODO]', props<{id:number}>());

export const toggleAll = createAction('[TODO toggleAll]', props<{completed:boolean}>());

export const deleteAll = createAction('[TODO deleteAll]');