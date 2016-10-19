import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cd } from './cd.model';
import { CdListComponent } from './cd-list.component';

@Component({
  selector: 'cd-drill',
  template: `
  <div class="container">
    <h3>Catalogue</h3>
      <select (change)="onChange($event.target.value)" class="form-control filter">
        <option *ngFor="let cd of childCdList" value="cd.genre">{{ cd.genre }}</option>
      </select>
      <select (change)="onChange($event.target.value)" class="form-control filter">
        <option *ngFor="let cd of childCdList" value="cd.artist">{{ cd.artist }}</option>
      </select>
    <div *ngFor="let currentCd of childCdList" (click)="detailButtonHasBeenClicked(currentCd)">
      {{ currentCd.title }}, {{ currentCd.artist }}
    </div>
  </div>
  `
})

export class CdDrillComponent {
  @Input() childCdList: Cd[];
  @Output() clickSender = new EventEmitter();

  detailButtonHasBeenClicked(cdToShow: Cd) {
    this.clickSender.emit(cdToShow);
  }

  //
  // uniqueArtistList: string[] = [];
  //
  // getArtist() {
  //   for(var i=0; i<childCdList.length; i++) {
  //     if (!uniqueArtistList.contains(cd.artist)) {
  //       uniqueArtistList.push(cd.artist);
  //     }
  //   }
  // }

}
