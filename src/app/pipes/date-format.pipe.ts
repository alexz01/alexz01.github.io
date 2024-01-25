import { Pipe, PipeTransform } from '@angular/core';
import { DateObj } from '../app.model';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  transform(value: DateObj,) {
    return value && `${this.months[value.month - 1]}, ${value.year}` || 'Now';
  }
}
