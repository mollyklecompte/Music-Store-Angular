import { Component, OnInit } from '@angular/core';
import { Cd } from './cd.model';
import { CdService } from './cd.service';
import { CartPipe } from './cart.pipe';

@Component({
  selector: 'my-cart',
  template: `
    <h3>My Cart</h3>
    <ul>
      <li *ngFor="let cd of cds | inCart:cds">{{ cd.title }}</li>
    </ul>
    <p>Total: \${{ cds | cart }} </p>
  `
})

export class CartComponent implements OnInit {
  cds: Cd[] = [];

  constructor(private cdService: CdService) { }

  ngOnInit(): void {
    this.cdService.getCds()
      .then(cds => this.cds = cds);
  }
}
