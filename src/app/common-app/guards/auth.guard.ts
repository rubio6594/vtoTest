import { LoginFacade } from '../+state/loginFacade';
import { Injectable } from "@angular/core"
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { Observable, of, switchMap } from "rxjs"

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private loginFacade: LoginFacade,
        private route: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.loginFacade.logged$.pipe(
            switchMap((isLogged) => {
                if(isLogged) {
                    return of(true);
                } else {
                    this.route.navigateByUrl('login');
                    return of(false)
                }
            })
           )
    }
}