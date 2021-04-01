import { NewsArticle } from './../models/newsArticle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private httpClient : HttpClient) { }

  topNewsUrl : string = 'http://g8.rudyah.com:4000/top-news';
  topSportsUrl : string = 'http://g8.rudyah.com:4000/top-sports';

  getTopNews() : Observable<NewsArticle[]> {
    return this.httpClient.get<NewsArticle[]> (this.topNewsUrl);
  }

  getTopSports() : Observable<NewsArticle[]> {
    return this.httpClient.get<NewsArticle[]> (this.topSportsUrl);
  }
}
