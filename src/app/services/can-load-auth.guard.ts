import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";
import { AuthStore } from "./auth.store";
import { first, tap } from "rxjs/operators";

@Injectable()
export class CanLoadAuthGuard implements CanLoad {

    constructor(
        private auth: AuthStore,
        private route: Router
    ){}
    canLoad(route: Route, segments: UrlSegment[]):
     Observable<boolean> {
     
        return this.auth.isLoggedIn$
            .pipe(
                first(),
                tap(islogin => {
                    if (!islogin){
                        this.route.navigateByUrl('/login');
                    }
                })
            )
    }
    
}