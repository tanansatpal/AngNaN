import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  slides: any = [];
  sliderOptions: any = {};

  constructor() {
  }

  ngOnInit() {
    this.sliderOptions = { items: 1, margin: 10, dots: true, responsiveClass: true, nav: false, autoHeight: true };

    this.slides = [
      {
        image: 'https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/matheus-ferrero-334418-unsplash.jpg',
        description: `<div class="container-fluid h-100 py-5">
            <div class="row align-items-center h-100">
              <div class="col-lg-8 col-xl-6 mx-auto text-white text-center">
                <h5 class="text-uppercase text-white font-weight-light mb-4 letter-spacing-5"> Just arrived</h5>
                <h1 class="mb-5 display-2 font-weight-bold text-serif">Denim Jackets</h1>
                <p class="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p> <a href="category.html" class="btn btn-light">View collection</a></p>
              </div>
            </div>
          </div>`
      },
      { image: 'https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/ian-dooley-347942-unsplash.jpg' },
      { image: 'https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/haley-phelps-62815-unsplash.jpg' },
    ];
  }

}
