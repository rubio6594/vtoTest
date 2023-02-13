import { tap } from 'rxjs';
import { loadPost, loadPostSuccess } from './posts.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from "@angular/core";
import { of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsEffects {
    loadPost$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadPost),
            switchMap(() => this.http.get<any>("https://jsonplaceholder.typicode.com/posts/").pipe(
                switchMap((response) => {
                    return of(loadPostSuccess({post: response}))})
            ))
        )
    );

  
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

}