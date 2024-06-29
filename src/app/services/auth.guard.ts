
import { Injectable } from "@angular/core";
import { AuthStore } from "./auth.store";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(
        private auth: AuthStore,
        private router: Router
    ) {}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> {
        return  this.checkIsAutenticate();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> {

       return  this.checkIsAutenticate();
    }

    private checkIsAutenticate() {
        // verifica se autenticato se lo è restituisce tru altrimenti 
        // ritorni alla pagina di login
     return  this.auth.isLoggedIn$
        .pipe(
         map(loggIn => loggIn ? true : this.router.parseUrl('/login'))
        );
    }
}