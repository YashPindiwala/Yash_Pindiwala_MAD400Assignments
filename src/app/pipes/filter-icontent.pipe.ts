import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from '../models/icontent';

@Pipe({
  name: 'filterIContent'
})
export class FilterIContentPipe implements PipeTransform {

  transform(content: IContent[], type?: string): unknown {
    if (type){
      return content.filter(c => c.type === type);
    } else {
      return content.filter(c => c.type);
    }
  }

}
