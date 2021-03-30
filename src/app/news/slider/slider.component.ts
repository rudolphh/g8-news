import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { ImageItem } from 'src/app/models/imageItem';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() images : ImageItem [] = [];

  @ViewChild('owlElement') carousel !: CarouselComponent;

  activeSlides !: SlidesOutputData;

  activeTab : number = 0;

  afterFirst : boolean = false;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.currentTabIndex.subscribe((index) => {
      console.log('in slider activeTab : ' + index);
      this.activeTab = index;

      if(this.afterFirst){
        this.carousel.to('slide-'+(this.activeTab+1));
      } else {
        this.afterFirst = true;
      }
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      800: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
    nav: true
  }


  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    let currentSlidePosition = this.activeSlides.startPosition;
    this.dataService.changeCarouselIndex(currentSlidePosition!);
  }

}
