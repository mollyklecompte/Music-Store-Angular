import { Component, OnInit } from '@angular/core';
import { Cd } from './cd.model';
import { CdService } from './cd.service';

@Component({
  selector: 'my-dashboard',
  template: `
    <div class="container">
      <div class="about-us">
        <h3>About Us</h3>
        <p>Molly and Sara founded S&amp;M Music Dungeon to dominate your ears with the baddest assesst music in the multiverse.</p>
      </div>
      <!-- Molly's Recs -->
      <div class="row">
      <h3>Molly's Recommendations for a Harda$$ Party</h3>
        <div class="col-xs-6 col-md-3">
          <a href="#" class="thumbnail">
            <img src="resources/images/britney.jpg" alt="Xena">
          </a>
        </div>
        <div class="col-xs-6 col-md-3">
          <a href="#" class="thumbnail">
            <img src="resources/images/dannybrown.jpg" alt="Gabrielle">
          </a>
        </div>
        <div class="col-xs-6 col-md-3">
          <a href="#" class="thumbnail">
            <img src="resources/images/priest.JPG" alt="Hercules">
          </a>
        </div>
        <div class="col-xs-6 col-md-3">
          <a href="#" class="thumbnail">
            <img src="resources/images/robzombie.jpg" alt="Ares">
          </a>
        </div>
      </div>
      <!-- Sara's Recs -->
      <div class="row">
      <h3>Sara's Recommendations for a Killer Session</h3>
        <div class="col-xs-6 col-md-3">
          <a href="#" class="thumbnail">
            <img src="resources/images/black-sabbath.jpg" alt="Xena">
          </a>
        </div>
        <div class="col-xs-6 col-md-3">
          <a href="#" class="thumbnail">
            <img src="resources/images/jay.jpg" alt="Gabrielle">
          </a>
        </div>
        <div class="col-xs-6 col-md-3">
          <a href="#" class="thumbnail">
            <img src="resources/images/matrix.jpg" alt="Hercules">
          </a>
        </div>
        <div class="col-xs-6 col-md-3">
          <a href="#" class="thumbnail">
            <img src="resources/images/rihanna.png" alt="Ares">
          </a>
        </div>
      </div>

    </div>
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
