import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cd } from './cd.model';
import { CdListComponent } from './cd-list.component';

@Component({
  selector: 'cd-drill',
  template: `
  <div class="container">
    <h3>Catalogue</h3>
      <select (change)="onGenreChange($event.target.value)" class="form-control filter">
        <option value="All Genres">All Genres</option>
        <option value="Soundtrack">Soundtrack</option>
        <option value="Metal">Metal</option>
        <option value="Pop">Pop</option>
        <option value="Electronica">Electronica</option>
        <option value="Shock Rock">Shock Rock</option>
      </select>
      <!-- When an artist is selected from this menu, the function onArtistChange is triggered, and the target e.g. artist name is passed in as an argument below. -->
      <select (change)="onArtistChange($event.target.value)" class="form-control filter">
        <option value="All Artists">All Artists</option>
        <option value="Rob Zombie">Rob Zombie</option>
        <option value="Marilyn Manson">Marilyn Manson</option>
        <option value="The Prodigy">The Prodigy</option>
        <option value="Actual Sounds + Voices">Actual Sounds + Voices</option>
        <option value="Rammstein">Rammstein</option>
        <option value="Rihanna">Rihanna</option>
        <option value="Various Artists">Various Artists</option>
        <option value="Screamin' Jay Hawkins">Screamin' Jay Hawkins</option>
        <option value="Madonna">Madonna</option>
      </select>
    <!-- In the childList (eg masterCdList from app.component ;), we're implementing a pipe here, to show only the object info that includes the artist that is selected from the dropdown above. How does that happen? The pipe is included in the forloop within the div tag. The pipe's name is "artist", and the parameters include the "selected artist", which in the case of this loop, that the "selectedArtist" property that was given to the CdDrillComponent class when the artist name was selected from the list.-->
    <div *ngFor="let currentCd of childCdList | artist:selectedArtist | genre:selectedGenre" (click)="detailButtonHasBeenClicked(currentCd)">
      {{ currentCd.title }}, {{ currentCd.artist }}
    </div>
  </div>
  `
})

export class CdDrillComponent {
  @Input() childCdList: Cd[];
  @Output() clickSender = new EventEmitter();
  // These are properties of CdDrillComponent, but the information that's being passed in through the onChange functions are going to assign strings from the menu options to the CdDrillComponent properties. The menu selection strings then become properties of the CdDrillComponent class.
  public selectedArtist: string = "All Artists";
  public selectedGenre: string = "All Genres";

  onGenreChange(genreMenuOption) {
    this.selectedGenre = genreMenuOption;
  }

  // From the select menu we get an artist selection. onArtistChange changes the property of CdDrillComponent from All Artists (or to All Artists...).
  onArtistChange(artistMenuOption) {
    this.selectedArtist = artistMenuOption;
  }

  detailButtonHasBeenClicked(cdToShow: Cd) {
    this.clickSender.emit(cdToShow);
  }

  // DYNAMICALLY UPDATE SELECT OPTIONS FOR ARTIST AND GENRE: ATTEMPT 1
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
