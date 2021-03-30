import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private carouselIndex = new BehaviorSubject(0);
  currentCarouselIndex= this.carouselIndex.asObservable();

  private tabIndex = new BehaviorSubject(0);
  currentTabIndex = this.tabIndex.asObservable();

  constructor() { }

  changeCarouselIndex(index: number) {
    this.carouselIndex.next(index);
  }

  changeTabIndex(index: number) {
    this.tabIndex.next(index);
  }

}
