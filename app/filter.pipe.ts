import { Pipe, PipeTransform } from '@angular/core';
import { CourseModel}   from './course.model';
 
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(courselist:CourseModel[], args: string): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return courselist.filter(course => course.name.includes(args));
        
  }
}