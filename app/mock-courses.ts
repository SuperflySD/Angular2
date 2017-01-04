import { Injectable, OnDestroy } from '@angular/core';
import { CourseModel}   from './course.model';




@Injectable()
export class MockCoursesService {
  
static coursesList: CourseModel[]=[];

constructor() {
   MockCoursesService.coursesList.push({name: "First course",  date:new Date (2017, 3, 12), duration:100, authors:   ["Me", "He"]});
//alert ("mock");
   MockCoursesService.coursesList.push({name: "Fakefirst course",  date:new Date (2018, 3, 12), duration:30, authors:["Me", "He"]});
   MockCoursesService.coursesList.push({name: "Second course", date:new Date (2017, 7, 5),  duration:120, authors:   ["Me", "He"]});
   MockCoursesService.coursesList.push({name: "Third course",  date:new Date (2017, 2, 28), duration:105, authors:   ["Me", "He"]});

}
    
  
  getcourses():CourseModel[]  {
     return MockCoursesService.coursesList;
  }
  addcourses(cm: CourseModel ) {
     MockCoursesService.coursesList.push(cm);
  }
  deletecourse (del :number) {
    let list1: CourseModel [] = MockCoursesService.coursesList.slice(0, del);
    MockCoursesService.coursesList = list1.concat(MockCoursesService.coursesList.splice(del+1));
  }
    editcourses(index:number, cm: CourseModel) {
      MockCoursesService.coursesList[index] = cm;

  }
 

}
