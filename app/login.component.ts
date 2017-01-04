import { AppComponent } from './app.component';
import { LoginService } from './login.service';
import { MockCoursesService } from './mock-courses';
import { User } from './user';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'login',
    templateUrl: 'html/login.html',
    styles: [`
        input.ng-touched.ng-pristine {border:solid red 2px;}
        input.ng-touched {border:solid green 2px;}
    `],

    providers: [LoginService]

    
})
export class LoginComponent{
    login: string = "";
    loginEmpty: boolean = true;
    password: string = "";
    passwordEmpty: boolean = true;
    formValid: boolean = true;
    lfocus: boolean = false;
    pfocus: boolean = false;
        
    
    constructor(private loginService: LoginService, private router: Router, private ms:MockCoursesService, 
    private appC: AppComponent) {
      
       
    }

    onChangel(): void {

        if (!this.login) {
            this.loginEmpty = true;
            document.getElementById("l").style.border = "solid red 2px";
        }
        else {
            this.loginEmpty = false;
            document.getElementById("l").style.border = "solid green 2px";
        }
    }

      onChangep(): void {
      if (!this.password) {
          this.passwordEmpty = true;
          document.getElementById("p").style.border = "solid red 2px";
      }
      else {
          this.passwordEmpty = false;
          document.getElementById("p").style.border = "solid green 2px";
      }
    }

  onSubmit(form: NgForm) {
      this.formValid = form.valid;
      if (!this.formValid) {
          this.login = "";
          this.password = "";
          this.passwordEmpty = true;
          this.loginEmpty = true;
          document.getElementById("btn").setAttribute("disabled", "true");
          document.getElementById("p").style.border = "solid red 2px";
          document.getElementById("l").style.border = "solid red 2px";
          this.lfocus = false;
          this.pfocus = false;
          return;
      }

      if (this.formValid){
         
         let i:Observable<User> = this.loginService.login(form.value.login, form.value.password);
         if (i) {
         i.subscribe((value) => console.log('Received new subject value :' + value.login));       
         
          this.appC.getlogin (this.login);        
          this.router.navigate(['/courses'], {
                queryParams:{
                    'login': this.login, 
                    'password': this.password
                }
            });
         
          
          
         }
         else{
             form.control.reset();
            // document.getElementById("p").placeholder  = "Absolutely wrong";
         

         }


    }


  }

    blur(a: number) {
      switch (a) {
          case 1: this.lfocus = false; break;
          case 2: this.pfocus = false; break;
}
  }

    focus(a: number) {
        switch (a) {
            case 1: this.lfocus = true; break;
            case 2: this.pfocus = true; break;
        }
    }
}