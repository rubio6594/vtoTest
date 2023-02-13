import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './posts.reducers';

export const selectFeatureLogin = createFeatureSelector<State>('postsState');

export const selectPost = createSelector(
    selectFeatureLogin,
    (state: State) => state.post
)