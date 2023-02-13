import { login, loginSuccess, logout } from './login.actions';
import { Action, ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { User } from '../definitions/user';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
  logged: boolean;
  user?: User;
  callback: "loading" | "loaded";
}

export const initialState: State = {
    logged: false,
    user: undefined,
    callback: "loaded"
  };

export const reducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    callback: "loading"
  })),
  on(loginSuccess, (state, {user}) => ({
    ...state,
    user,
    logged: true,
    callback: "loaded"
  })),
  on(logout, (state) => ({
    ...state,
    user: undefined,
    logged: false,
    callback: "loaded"
  }))
)

export function loginReducer(state: State |undefined, action: Action) {
  return reducer(state, action)
}

function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({
    keys: [
      { 
        loginState: ['user', 'logged'],
      },  
    ],
    rehydrate: true
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];