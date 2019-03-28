import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services';
import { jobTop_Interface } from './job-top.interface';
import { Slider_Interface } from './slider.interface';
import { jobNew_Interface } from './job-new.interface';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent implements OnInit,OnDestroy{

  sliderSource: Slider_Interface[]
  jobTopCaroucel: jobTop_Interface[]
  jobNewCaroucel: jobNew_Interface[]
  

  constructor(private title:Title, private apiService: ApiService) {}

  ngOnInit(){

    this.title.setTitle('اپلیکیشن کوشی | یافتن تمامی مشاغل و اصناف شهر');

    this.getJobTop();
    this.getJobNew();
    this.getSlider();

   }


  getJobTop(): void {
    this.apiService.getJobTop().subscribe(
      response => this.jobTopCaroucel = response);

   }
  getJobNew(): void {
    this.apiService.getJobNew().subscribe(
      response => this.jobNewCaroucel = response);

   }
  getSlider(): void {
    this.apiService.getSlider().subscribe(
      response => this.sliderSource = response);

   }


  ngOnDestroy(){
    // this.sub.unsubscribe();
   }
}
