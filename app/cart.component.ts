import { Component, OnInit } from '@angular/core';
import { Cd } from './cd.model';


@Component({
  selector: 'my-cart',
  template: `
    <h3>My Cart</h3>
    <ul>
    <li *ngFor="let cd of childCdList"></li>
    </ul>
    <h2>Total: \${{ childCdList | cart }}</h2>
  `
})

export class CartComponent {
// @Input() childCdList: Cd[];

// public cartTotal: number = 0;
// public cdsInCart: Cd[] = [];
//
// getCdsInCart(childCdList: Cd[]) {
//   for(var i=0; i < childCdList.length; i++) {
//     if (input[i].inCart === true) {
//       this.cdsInCart.push([i]);
//     }
//   }
// }
//
// calculateTotal(cdsInCart: Cd[]) {
//   for(var i=0; i < cdsInCart.length; i++) {
//     this.cartTotal += [i].price;
//   }
// }

}
