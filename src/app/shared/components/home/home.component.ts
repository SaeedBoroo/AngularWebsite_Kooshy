import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {

  gallerySource = [
    "assets/images/medium-cushy@1x.jpg",
    "assets/images/medium-cushy@1x.jpg"
];

  constructor(private title:Title) {
    this.title.setTitle('صفحه اصلی کوشی');
   }
}
