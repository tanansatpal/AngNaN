import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faPinterest, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faPinterest = faPinterest;
  faVimeo = faVimeo;
  faPaperPlane = faPaperPlane;

  constructor() {
  }

  ngOnInit() {
  }

}
