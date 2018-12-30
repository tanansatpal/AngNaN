import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {
  @Input() item: any;

  constructor() {
  }

  ngOnInit() {
  }

}
