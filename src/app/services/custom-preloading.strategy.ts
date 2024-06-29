import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
    
    preload(route: Route, load: () => Observable<any>): Observable<any> {
    
        if(route.data['preload']) {
            // se il preloading è attivo il modoulo verra precaricato
            return load();
        } else {
            // altrimenti no
            return of(null);
        }
    }
    
}