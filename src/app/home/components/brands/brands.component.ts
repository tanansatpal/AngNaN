import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsComponent implements OnInit {
  @Input() brands;
  sliderOptions: any = {
    items: 6,
    margin: 10,
    dots: true,
    responsiveClass: true,
    nav: false,
    autoHeight: true
  };

  constructor() {}

  ngOnInit() {}
}
