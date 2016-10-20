import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template:`
    <h1>{{ title }}</h1>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a routerLink="/cd-list">Catalogue</a></li>
              <li><a routerLink="/dashboard">Dashboard</a></li>
              <li><a routerLink="/my-cart">My Cart</a></li>
            </ul>
          </div>
        </div>
      </nav>


    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'S&Ms Music Dungeon';

}
