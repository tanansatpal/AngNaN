import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() category: any;

  constructor() {
  }

  ngOnInit() {
    if (this.category && this.category.image) {
      this.category.image.image = `${environment.CDN_URL}${this.category.image.image}`;
    }
  }

}
