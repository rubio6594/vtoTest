import { State } from './login.reducers';
import { selectUser, isLogged, selectCallback } from './login.selectors';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from './login.actions';
import { User } from '../definitions/user';

@Injectable({
    providedIn: 'root'
})

export class LoginFacade {
    readonly user$: Observable<User | undefined> = this.store.pipe(
        select(selectUser)
    );

    readonly logged$: Observable<boolean> = this.store.pipe(
        select(isLogged)
    )
    
    readonly callback$: Observable<String> = this.store.pipe(
        select(selectCallback)
    )

    constructor(protected store: Store<State>) {}

    doLogin(user: string, pass: string) {
        this.store.dispatch(login({user, pass}));
    }

    doLogout() {
        this.store.dispatch(logout());
    }
}