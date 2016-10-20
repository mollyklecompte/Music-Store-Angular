import { Component } from '@angular/core';
import { Cd } from './cd.model';
import { CdService } from './cd.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-cd-list',
  template: `
  <div class="container">
    <h3>CD Catalogue</h3>
    <cd-drill
      (clickSender)="showDetails($event)"
    ></cd-drill>
    <cd-detail
      [childSelectedCd]="selectedCd"
      (cartStatusChangedSender)="doneWithDetails()"
    ></cd-detail>
  </div>
  `,
  providers: [CdService]
})

export class CdListComponent implements OnInit {
  cds: Cd[];
  constructor(private cdService: CdService) {
  }

  ngOnInit(): void {
    this.cdService.getCds()
      .then(cds => this.cds = cds);
  }

  selectedCd: Cd = null;
  showDetails(clickedCd: Cd) {
    this.selectedCd = clickedCd;
  }

  doneWithDetails() {
    this.selectedCd = null;
  }



}
