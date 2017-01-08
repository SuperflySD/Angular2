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
import { HttpService}   from './new.courses.component';
import { DurationPipe}   from './duration.pipe';
import { FilterPipe}   from './filter.pipe';
import { MockCoursesService}   from './mock-courses';
import {LoginService} from './login.service';
import { Guard }   from './guard';

 

const appRoutes: Routes =[
    { path: '', component: LoginComponent},
    { path: 'courses', component: CoursesComponent,  pathMatch:'full', canActivate: [Guard]},
    { path: 'courses/:id', component: EditCoursesComponent, canActivate: [Guard]},
    { path: 'query', component: HttpService, canActivate: [Guard]},
    { path: '**', component: CoursesComponent, canActivate: [Guard]}
];
 
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, LoginComponent, CoursesComponent, EditCoursesComponent, HttpService, DurationPipe,
    FilterPipe],
    providers: [ MockCoursesService, LoginComponent, Guard, { provide: AppComponent, useClass: AppComponent} ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { 
}