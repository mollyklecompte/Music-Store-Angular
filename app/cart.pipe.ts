import { Pipe, PipeTransform } from '@angular/core';
import { Cd } from './cd.model';

@Pipe ({
  name: 'cart',
  pure: false
})

export class CartPipe implements PipeTransform {
  transform(input: Cd[]) {
    var total: number = 0;
    for(var i=0; i <input.length; i++) {
      if(input[i].inCart === true) {
        total += input[i].price;
      }
    }
    return total;
  }
}
