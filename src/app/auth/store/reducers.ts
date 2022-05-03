import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '../types/auth-state.interface';
import { registerAction } from './register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({ ...state, isSubmitting: true })
  )
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
