import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImageItem } from 'src/app/models/imageItem';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsImages : ImageItem[] = [];

  constructor() { }

  ngOnInit(): void {

    this.sportsImages = [
      {
        id: 1,
        href: 'https://clutchpoints.com/buccaneers-news-tom-brady-speaks-out-on-possibility-of-passing-michael-jordan-in-rings/',
        src: 'assets/image_sports_1.jpg'
      },
      {
        id: 2,
        href: 'https://www.theringer.com/nba/2020/2/17/21138373/nba-player-ranking-2019-20-all-star-break',
        src: 'assets/image_sports_2.jpg'
      },
      {
        id: 3,
        href: 'https://www.gamblingsites.org/blog/4-differences-between-betting-online-in-person/',
        src: 'assets/image_sports_3.jpg'
      }
    ];
  }
}
