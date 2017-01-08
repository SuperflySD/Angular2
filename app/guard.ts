import { AppComponent } from './app.component';
import { Injectable }       from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class Guard implements CanActivate{
    
    constructor (private router: Router) {

    }

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {
         
         if (!AppComponent.staticlog)
              this.router.navigate (['/']);

         let url: string = state.url;

        return Observable.of(!(!AppComponent.staticlog)).delay(100);
         
     
            
    }
}