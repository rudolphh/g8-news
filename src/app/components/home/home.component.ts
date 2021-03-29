import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ImageItem } from 'src/app/models/imageItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeImages : ImageItem[] = [];

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {

    this.newsService.getTopNews().subscribe(data => {

      data.forEach(article => {
        this.homeImages.push({
          id: article._id,
          href: article.url,
          src: article.urlToImage
        })
      })
    });

  }

}
