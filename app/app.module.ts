import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CdListComponent } from './cd-list.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CartComponent } from './cart.component';
import { CdDrillComponent } from './cd-drill.component';
import { CdDetailComponent } from './cd-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path:'cd-list',
      component: CdListComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path:'my-cart',
      component: CartComponent
    },
  ])
],
  declarations: [
    AppComponent,
    CdListComponent,
    DashboardComponent,
    CartComponent,
    CdDrillComponent,
    CdDetailComponent,
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
