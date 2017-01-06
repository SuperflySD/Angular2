import { Component, Input } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { OnInit } from '@angular/core';
import { CourseModel}   from './course.model';

@Component({
  selector: 'my-app',
   templateUrl: 'html/appComponent.html',
  
styles: [`h1 {
    font-size: 1.2em;
    color: #999;
    margin-bottom: 0;
  }
  h2 {
    font-size: 2em;
    margin-top: 0;
    padding-top: 0;
  }
  a {
    padding: 5px 10px;
    text-decoration: none;
    margin-top: 0px;
    display: inline-block;
   /* background-color: #eee;*/
    border-radius: 4px;
    width:100px;
    
  }
  a:visited, a:link {
    color: #607D8B;
  }
  a:hover {
    color: #039be5;
   /*  background-color: #CFD8DC;*/
    border-right: solid black 1px;
  }
  a.active {
    color: #039be5;
  }
  .header {border: solid black 1px; margin-bottom: 25px; margin-top: 25px; }
          .course {border: solid black 1px; margin-bottom: 25px; margin-top: 25px; text-indent: 2em;padding:10px; color: black}
          button {margin-bottom: 15px; width: 150px;}
          .course-block {font-weight: bold; color: black;}
          #text {padding-top:25px;}
          .btn-group-vertical {width: 150px;}
          #btnadd {margin-left: 15px;}
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
      margin-bottom: 0px;
  }
  .header img {
    float: left;
    width: 70px;
    height: 70px;
    border: solid grey 1px;
  }

  
 
`],
// styleUrls: ['html/css/styles.css']

})

export class AppComponent implements OnInit{ 
 
log:string = "";
//@Input()
 chosenC: string = "";
 
getlogin(login:string) {
this.log = login;
}
getchosenC(chos:string){
  this.chosenC=chos;
}

 ngOnInit(){
  // alert("app.component");
    
}
}

