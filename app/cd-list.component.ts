import { Component } from '@angular/core';
import { Cd } from './cd.model';

@Component({
  selector: 'my-cd-list',
  template: `
  <div class="container">
    <h3>CD Catalogue</h3>
    <cd-drill
      [childCdList]="masterCdList"
      (clickSender)="showDetails($event)"
    ></cd-drill>
    <cd-detail
      [childSelectedCd]="selectedCd"
      (cartStatusChangedSender)="doneWithDetails()"
    ></cd-detail>
  </div>
  `
})

export class CdListComponent {
    public masterCdList: Cd[] = [
    new Cd("The Matrix: Music from the Motion Picture", "Various Artists", "Soundtrack", 1999, 8.00),
    new Cd("Hellbilly Deluxe", "Rob Zombie", "Metal", 1998, 10.00),
    new Cd("The Sinister Urge", "Rob Zombie", "Metal", 2001, 10.00),
    new Cd("The Electric Warlock Acid Witch Satanic Orgy Celebration Dispenser", "Rob Zombie", "Metal", 2016, 14.00),
    new Cd("Antichrist Superstar", "Marilyn Manson", "Metal", 1996, 12.00),
    new Cd("SAY10", "Marilyn Manson", "Metal", 2017, 20.00),
    new Cd("Eat Me, Drink Me", "Marilyn Manson", "Metal", 2007, 20.00),
    new Cd("Everything's Under Control", "Actual Sounds + Voices", "Electronica", 1998, 8.00),
    new Cd("Experience", "The Prodigy", "Electronica", 1992, 8.00),
    new Cd("Invaders Must Die", "The Prodigy", "Electronica", 2004, 10.00),
    new Cd("Herzeleid", "Rammstein", "Metal", 1995, 10.00),
    new Cd("Rosenrot", "Rammstein", "Metal", 2005, 10.00),
    new Cd("Good Girl Gone Bad", "Rihanna", "Pop", 2007, 10.00),
    new Cd("Rated R", "Rihanna", "Pop", 2009, 10.00),
    new Cd("Unapologetic", "Rihanna", "Pop", 2012, 10.00),
    new Cd("Fifty Shades of Grey: Original Motion Picture Soundtrack", "Various Artists", "Soundtrack", 2015, 8.00),
    new Cd("I Shake My Stick at You", "Screamin' Jay Hawkins", "Shock Rock", 1991, 10.00),
    new Cd("I Put a Spell on You", "Screamin' Jay Hawkins", "Shock Rock", 1977, 10.00),
    new Cd("Rated X", "Screamin' Jay Hawkins", "Shock Rock", 1970, 10.00),
    new Cd("Madonna", "Madonna", "Pop", 1983, 8.00),
    new Cd("Like a Virgin", "Madonna", "Pop", 1984, 9.00),
    new Cd("Ray of Light", "Madonna", "Pop", 1998, 8.00),
    new Cd("Music", "Madonna", "Pop", 2000, 8.00)
  ];

  selectedCd: Cd = null;
  showDetails(clickedCd: Cd) {
    this.selectedCd = clickedCd;
  }

  doneWithDetails() {
    this.selectedCd = null;
  }

  uniqueArtistList: string[] = [];
  removeArtistDupes() {
    for(var cd of masterCdList) {
      if (!uniqueArtistList.contains(cd.artist)) {
        uniqueArtistList.push(cd.artist);
      }
    }
  }

}
