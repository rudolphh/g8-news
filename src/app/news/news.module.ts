import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DataService } from '../services/data.service';
import { NewsService } from '../services/news.service';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    LatestnewsComponent
  ],
  imports: [
    CarouselModule,
    CommonModule
  ],
  providers: [ NewsService , DataService ]
})
export class NewsModule { }
