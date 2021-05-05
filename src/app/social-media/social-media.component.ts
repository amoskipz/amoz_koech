import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/amoskipz",
    linkedin: "https://www.linkedin.com/in/kiprotich-amos-koech-21b79a1a1/",
    gmail: "koechkipz03@gmail.com",
    instagram : "https://www.instagram.com/hazardkipzsanchez/?hl=en",
    facebook: "https://www.facebook.com/Anthony Martial Sanji/",
    twitter: "https://twitter.com/kiprotich_amoz_koech_"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
