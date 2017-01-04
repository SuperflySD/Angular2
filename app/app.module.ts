import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgForm}         from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule }   from '@angular/http';
 
import { AppComponent }     from './app.component';
import { LoginComponent }   from './login.component';
import { CoursesComponent }   from './courses.component';
import { EditCoursesComponent }   from './edit.courses.component';
import { NewCoursesComponent}   from './new.courses.component';
import { DurationPipe}   from './duration.pipe';
import { FilterPipe}   from './filter.pipe';
import { MockCoursesService}   from './mock-courses';
import {LoginService} from './login.service';


 

const appRoutes: Routes =[
    { path: '', component: LoginComponent},
    { path: 'courses', component: CoursesComponent,  pathMatch:'full'},
    { path: 'courses/:id', component: EditCoursesComponent},
    { path: '**', component: LoginComponent }
];
 
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, LoginComponent, CoursesComponent, EditCoursesComponent, NewCoursesComponent, DurationPipe,
    FilterPipe],
    providers: [MockCoursesService, LoginComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { 
}