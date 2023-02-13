import { createAction, props } from '@ngrx/store';
import { User } from '../definitions/user';

export const login = createAction('[VtoTest] Login', props<{user: string, pass: string}>());

export const loginSuccess = createAction('[VtoTest] Login Success', props<{user: User}>());

export const loginFail = createAction('[VtoTest] Login Fail', props<{error: String}>());

export const logout = createAction('[VtoTest] Logout');