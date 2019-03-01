import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlidesComponent implements OnInit {
  @Input() slides = [];
  sliderOptions = {
    items: 1,
    margin: 10,
    navText: [
      '<img src="../../../../assets/img/prev.svg" alt="" width="50">',
      '<img src="../../../../assets/img/next.svg" alt="" width="50">'
    ],
    dots: false,
    responsiveClass: true,
    nav: true,
    autoHeight: true
  };

  // sliderOptions: NguCarouselConfig;

  constructor() {}

  ngOnInit() {}
}
