import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => console.log('side menu id parameter', params['id']));
  }

  ngOnInit() {
  }

}
