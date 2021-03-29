import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { SliderComponent } from './components/slider/slider.component';
import { LatestnewsComponent } from './components/latestnews/latestnews.component';
import { SportsnewsComponent } from './components/sportsnews/sportsnews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    HomeComponent,
    SportsComponent,
    SliderComponent,
    LatestnewsComponent,
    SportsnewsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
