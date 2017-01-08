import {User} from './user';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: Http) {
    }

    login(login : string, password:string): any {
        if (login == "q"&& password=="q") 
          return new Observable(obs1 => obs1.next(new User("qwerty","as")));
        else
         return;
    }
    
}