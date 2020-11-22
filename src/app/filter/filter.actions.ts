import { createAction, props } from '@ngrx/store';

export type valid_filters = 'all' | 'completed' | 'pending';

export const setFilter = createAction('[FILTER] Set filter', props<{filter: valid_filters}>());