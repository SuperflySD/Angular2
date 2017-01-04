import { CourseModel } from './course.model';
import { MockCoursesService } from './mock-courses';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'courses',
 templateUrl: 'html/courses.html',


styles: [`
        .header {border: solid black 1px; margin-bottom: 25px; margin-top: 25px; }
        .course {border: solid black 1px; margin-bottom: 25px; margin-top: 25px; text-indent: 2em;padding:10px; color: black}
         button {margin-bottom: 15px; width: 150px;}
        .course-block {font-weight: bold; color: black;}
        #text {padding-top:25px;}
        .btn-group-vertical {width: 150px;}
        #btnadd {margin-left: 17px;}
        #wrapper {min-height:100%;position:relative;}
        #footer {
	text-align: center;
	width:100%;
	height:50px;
	position:absolute;
	bottom:0;
	left:0;
    padding:10px;
    border: solid black 1px;
    margin-top:10px;
    margin-bottom: 0px;
}
    `],

providers: [CourseModel]

})



export class CoursesComponent implements OnInit, OnDestroy{


del:number=-1;
private filterV:string = "";
private routeSubscription: Subscription;
private querySubscription: Subscription;
static login:string = "";
 

 constructor(private route: ActivatedRoute, private ms:MockCoursesService){
           
       // this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                CoursesComponent.login = queryParam['login'];
               
            }
        );
    }
    
   get coursesList(): CourseModel[]{
       return this.ms.getcourses();
   }

  ondelete(){
     this.ms.deletecourse(this.del);
  
//alert (this.coursesList.length);
 }
 ngOnInit(){
    // alert("init");
     
 }
 
  ngOnDestroy (){
//alert("destroy");

 }
 
}
