import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  galleryDataSource = [
    "assets/images/medium-cushy@1x.jpg",
    "https://js.devexpress.com/Content/images/doc/18_2/PhoneJS/person3.png"
];

  constructor(private title:Title) {
    this.title.setTitle('جزئیات هر شغل');
   }

  ngOnInit() {
  }

}
