import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DataService } from '../services/data.service';
import { NewsService } from '../services/news.service';
import { WeatherComponent } from '../components/weather/weather.component';
import { ChatboxComponent } from '../components/chatbox/chatbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    LatestnewsComponent,
    WeatherComponent,
    ChatboxComponent
  ],
  imports: [
    CarouselModule,
    CommonModule,
    FormsModule
  ],
  providers: [ NewsService , DataService ]
})
export class NewsModule { }
