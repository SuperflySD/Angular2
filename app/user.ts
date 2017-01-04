import {Injectable} from '@angular/core';


@Injectable()
export class User {

    constructor(public login: string, public password: string) {
    }
}