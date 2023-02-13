import { loadPostSuccess } from './posts.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/posts-app/definitions/post';

export interface State {
 post: Post[]
}

export const initialState: State = {
    post: []
  };

const loginReducer = createReducer(
  initialState,
  on(loadPostSuccess, (state, {post}) => ({
    ...state,
    post
  }))
)

export function postsReducer(state: State |undefined, action: Action) {
  return loginReducer(state, action)
}