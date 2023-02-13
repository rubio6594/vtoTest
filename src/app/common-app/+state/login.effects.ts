import { login, loginSuccess, logout } from './login.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { delay, of, switchMap } from 'rxjs';

@Injectable()
export class LoginEffects {
    login$ = createEffect(() => 
        this.actions$.pipe(
            ofType(login),
            delay(2000),
            switchMap((payload) => {
                this.router.navigateByUrl('home');
                return of(loginSuccess({
                user: {
                    name: 'test',
                    email: payload.user,
                    token: payload.pass
                    }
                }))
            })
        )
    );

    logout$ = createEffect(() => 
    this.actions$.pipe(
        ofType(logout),
        switchMap(() => {
            this.router.navigateByUrl('login');
            return of({type: "No Action"});
            }
        )
    )
    );

  
  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}

}