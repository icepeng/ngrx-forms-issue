import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromForm from './form';

export interface State {
  form: fromForm.State;
}

export const reducers: ActionReducerMap<State> = {
  form: fromForm.reducer,
};

export const getFormState = createFeatureSelector<fromForm.State>('form');

