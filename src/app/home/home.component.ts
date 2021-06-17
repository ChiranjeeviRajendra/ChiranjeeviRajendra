import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;

  // constructor() { }

  ngOnInit(): void {
  }

  images = [
    'assets/cara1.png', 
    'assets/cara2.png', 
    'assets/cara3.webp', 
    'assets/cara4.jpg',
    'assets/cara5.jpg',
    'assets/cara6.png'
  ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3200;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

}
