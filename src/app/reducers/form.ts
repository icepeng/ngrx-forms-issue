import { Action } from '@ngrx/store';
import {
  createFormGroupReducerWithUpdate,
  createFormGroupState,
  FormGroupState,
  validate,
} from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';

export interface MyForm {
  value: string;
  items: ItemForm[];
}

export interface ItemForm {
  name: string;
  description: string;
}

export const FORM_ID = 'form';

export interface State extends FormGroupState<MyForm> {}

export const initialState: State = createFormGroupState<MyForm>(FORM_ID, {
  value: '',
  items: [
    {
      name: '',
      description: '',
    },
  ],
});

const validationFormGroupReducer = createFormGroupReducerWithUpdate<MyForm>({
  value: validate(required),
});

export function reducer(state = initialState, action: Action) {
  state = validationFormGroupReducer(state, action);

  switch (action.type) {
    default: {
      return state;
    }
  }
}
