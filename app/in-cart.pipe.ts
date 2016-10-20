import { Pipe, PipeTransform } from '@angular/core';
import { Cd } from './cd.model';

@Pipe ({
  name: 'inCart',
  pure: false
})

export class InCartPipe implements PipeTransform {
  transform(input: Cd[]) {
    var cdsInCartList: Cd[] = [];
    for(var i=0; i < input.length; i++) {
      if(input[i].inCart === true) {
        cdsInCartList.push(input[i]);
      }
    }
    return cdsInCartList;
  }
}
