import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../../types/register-request.interface';

import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>()
);
