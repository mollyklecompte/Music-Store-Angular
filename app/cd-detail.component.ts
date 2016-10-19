import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdListComponent } from './cd-list.component';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-detail',
  template:
  `
    <div class="cd-detail" *ngIf="childSelectedCd">
      <label>Added to Cart</label>
      <input *ngIf= "childSelectedCd.inCart === true" type="checkbox" checked (click)="toggleCart(false)"/>
      <input *ngIf="childSelectedCd.inCart === false" type="checkbox" (click)="toggleCart(true)"/>
      <p><strong>{{ childSelectedCd.title }}</strong></p>
      <p><em>{{ childSelectedCd.artist }}</em></p>
      <p>{{ childSelectedCd.genre }}</p>
      <p>{{ childSelectedCd.year }}</p>
      <p>$ {{ childSelectedCd.price }}</p>
    </div>
  `
})

export class CdDetailComponent {
  @Input() childSelectedCd: Cd;
  @Output() cartStatusChangedSender = new EventEmitter();
  cartStatusChanged() {
    this.cartStatusChangedSender.emit();
  }
  toggleCart(setPlacedInCart: boolean) {
    this.childSelectedCd.inCart = setPlacedInCart;
  }
}
