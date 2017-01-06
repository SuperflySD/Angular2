import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 

@Component({
    selector: 'my-sse',
    template: ` <input type="text" [(ngModel)]="numb">
    <div>{{factorial}}</div>`

})

export class HttpService{
 
 factorial: number =11;
    done: boolean = false;
   numb:number=5;
 constructor(private http: Http){ 
     this.submit(7);

 }

 submit(num: number){
        console.log(num);
        this.getFactorial(num)
                .subscribe((data) => {this.factorial=data; this.done=true;});
    }

   
     

    getFactorial(num){
        return this.http.get('http://localhost:49650/home/GetFactorial?number='+num)
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{return Observable.throw(error);});
    }
}