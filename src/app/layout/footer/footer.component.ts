import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faVimeo } from '@fortawesome/free-brands-svg-icons/faVimeo';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';

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

  constructor() {}

  ngOnInit() {}
}
