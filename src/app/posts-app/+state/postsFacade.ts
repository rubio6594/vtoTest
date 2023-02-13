import { loadPost } from './posts.actions';
import { State } from './posts.reducers';
import { selectPost } from './posts.selectors';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/posts-app/definitions/post';

@Injectable({
    providedIn: 'root'
})

export class PostsFacade {
    readonly post$: Observable<Post[] | undefined> = this.store.pipe(
        select(selectPost)
    );

    
    constructor(protected store: Store<State>) {}

    getPosts() {
        this.store.dispatch(loadPost());
    }
}