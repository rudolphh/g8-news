import { NewsArticle } from './../../models/newsArticle';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {

  newsArticles : NewsArticle [] = [];

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {

    this.newsService.getTopNews().subscribe((data) => this.newsArticles = data);
  }

}
