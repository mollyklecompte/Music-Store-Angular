import { Component, OnInit } from '@angular/core';
import { Cd } from './cd.model';
import { CdService } from './cd.service';

@Component({
  selector: 'my-dashboard',
  template: `
    <h3>Home</h3>

    <p *ngFor="let cd of cds">{{ cd.title }}</p>
  `

})

export class DashboardComponent implements OnInit {

  cds: Cd[] = [];

  constructor(private cdService: CdService) { }

  ngOnInit(): void {
    this.cdService.getCds()
      .then(cds => this.cds = cds);
  }

  gotoDetail(cd: Cd): void { /* not implemented yet */}
}
