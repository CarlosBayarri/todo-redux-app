import { createReducer, on } from '@ngrx/store';
import { setFilter, valid_filters } from './filter.actions';

export const initialState: valid_filters = 'all';

const _filterReducer = createReducer(initialState,
    on(setFilter, (state, {filter}) => filter));

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}