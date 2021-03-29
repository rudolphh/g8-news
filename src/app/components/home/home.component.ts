import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImageItem } from 'src/app/models/imageItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeImages : ImageItem[] = [];

  constructor() { }

  ngOnInit(): void {

    this.homeImages = [
      {
        id: 1,
        href: 'https://vaccinefinder.org/search/',
        src: 'assets/image_home_1.jpg',
      },
      {
        id: 2,
        href: 'https://www.bloomberg.com/news/articles/2021-03-27/insurers-may-be-on-hook-for-millions-tied-to-suez-canal-crisis',
        src: 'assets/image_home_5.jpg'
      },
      {
        id: 3,
        href: 'https://www.bbc.com/news/world-asia-india-56517495',
        src:'assets/image_home_6.jpg'
      }
    ];
  }

}
