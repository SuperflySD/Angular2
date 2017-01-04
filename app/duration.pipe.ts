import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
  
  transform(value?: number, args?: any): string {
     
    if(value<0) 
       return "wrong duration";
    if(!value) 
       return "";
     
    let result = "";
    if (value/60 >= 1) {
      result = Math.floor(value/60).toString();
      result = result + (value/60 >= 2 ? " hours": " hour");
       if (value % 60 > 0)
          result = result + " "+ (value % (Math.floor(value/60)*60)).toString() +" minutes";
  }
    else 
        result = value.toString() + " minutes"; 
    
    

    return result;
  }
}