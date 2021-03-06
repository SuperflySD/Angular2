import { CourseModel } from './course.model';
import { MockCoursesService } from './mock-courses';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppComponent }     from './app.component';

@Component({
selector: 'edit-courses',
 templateUrl: 'html/editCourses.html',
 styles: [`
        h1 {
          font-size: 1.2em;
          color: black;
          margin-top: 6px;}
        button {
            margin-bottom: 15px; width: 150px;
          }
        .form-control {
        }
        .row{
            margin-bottom:20px;
        }
        .form-group {
            margin-bottom: 0px;
          }
        SELECT, INPUT[type="text"] {
            width: 160px;
            box-sizing: border-box;
        }
        SECTION {
            padding: 0px;
            
            overflow: auto;
        }
        SECTION > DIV {
            float: left;
            padding: 4px;
        }
        SECTION > DIV + DIV {
            width: 40px;
            text-align: center;}
            `],

})



export class EditCoursesComponent implements OnInit{
 
  fdate: string = "";
  dur:number;
  cm: CourseModel = new CourseModel();
  id;

  constructor (private router: Router, private Aroute: ActivatedRoute, private ms: MockCoursesService,
  private app: AppComponent){
     this.id = Number.parseInt((Aroute.snapshot.params['id']));
     if (this.id || this.id==0) {
       let c = ms.getcourses();
       this.cm = c[this.id]; 
         }
     this.app.getchosenC(this.cm.name);
  }

onNameChange(model: any){
this.app.getchosenC(model);
}

onSubmit(form:NgForm){
  let f= form.value;
  if (isNaN(this.id))
     this.ms.addcourses({name: f.title, date: f.date, duration: f.duration, authors:  ["Me", "He"], description: f.description});
  else
      this.ms.editcourses(this.id, {name: f.title, date: f.date, duration: f.duration, authors:  ["Me", "He"], description: f.description});
  
  this.app.getchosenC("");
  this.router.navigate(['/courses']);
 

 }



ngOnInit () {
}

}
   

