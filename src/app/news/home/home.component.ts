import { NewsService } from '../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ImageItem } from 'src/app/models/imageItem';
import { NewsArticle } from '../../models/newsArticle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles : NewsArticle [] = [];
  images : ImageItem[] = [];

  displayChat : boolean = true;

  constructor(
    private newsService : NewsService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      switch (data.kind) {
        case 'sports' :
          this.newsService.getTopSports().subscribe(data => this.extract(data));
          this.displayChat = false;
          break;

        default:
          this.newsService.getTopNews().subscribe(data => this.extract(data));
      }
    });

  }// end ngOnInit

  extract(data : NewsArticle[]) {
    this.articles = data;
    this.extractImages(data);
  }

  extractImages(news : NewsArticle[]) {
    news.forEach((article) => {
      this.images.push({
        id: article._id,
        href: article.url,
        src: article.urlToImage
      });
    });
  }

}
