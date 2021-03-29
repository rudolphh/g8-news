import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "home", component:HomeComponent },
  { path: "aboutus", component:AboutusComponent },
  { path: "contactus", component:ContactusComponent },
  { path: "sports", component:SportsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
