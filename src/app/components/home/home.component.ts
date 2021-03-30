import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ImageItem } from 'src/app/models/imageItem';
import { NewsArticle } from '../../models/newsArticle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeArticles : NewsArticle [] = [];
  homeImages : ImageItem[] = [];

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {

    this.newsService.getTopNews().subscribe(data => {
      this.homeArticles = data;

      this.homeArticles.forEach(article => {
        this.homeImages.push({
          id: article._id,
          href: article.url,
          src: article.urlToImage
        });
      })
    });

  }

}
