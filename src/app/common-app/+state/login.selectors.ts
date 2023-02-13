import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './login.reducers';


export const selectFeatureLogin = createFeatureSelector<State>('loginState');

export const selectUser = createSelector(
    selectFeatureLogin,
    (state: State) => state.user
)

export const isLogged = createSelector(
    selectFeatureLogin,
    (state: State) => state.logged
)

export const selectCallback = createSelector(
    selectFeatureLogin,
    (state: State) => state.callback
)