import { NewsArticle } from './../../models/newsArticle';
import { NewsService } from './../../services/news.service';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {

  @Input() articles : NewsArticle [] = [];

  checked : number = 0;

  activeTab : number = 0;

  constructor(
    private newsService : NewsService,
    private dataService : DataService
    ) { }

  ngOnInit(): void {

    this.dataService.currentCarouselIndex.subscribe((index) => this.checked = index);

  }

  getPassedDataTab(data: number){
    this.activeTab = data;
    console.log(this.activeTab);
    this.dataService.changeTabIndex(data);
  }

}
