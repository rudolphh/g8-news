import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImageItem } from 'src/app/models/imageItem';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/newsArticle';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsArticles : NewsArticle[] = [];
  sportsImages : ImageItem[] = [];

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {

    this.newsService.getTopSports().subscribe(data => {
      this.sportsArticles = data;

      this.sportsArticles.forEach(article => {
        this.sportsImages.push({
          id: article._id,
          href: article.url,
          src: article.urlToImage
        });
      });
    });

  }
}
