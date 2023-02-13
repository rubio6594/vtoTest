import { Post } from '../definitions/post';
import { createAction, props } from '@ngrx/store';

export const loadPost = createAction('[VtoTest] Load Post');

export const loadPostSuccess = createAction('[VtoTest] Load Post Success', props<{post: Post[]}>());

export const loadPostFail = createAction('[VtoTest] Load Post Fail', props<{error: String}>());