import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent implements OnInit,OnDestroy{

  sliderSource: string[]
  jobTopCaroucel
  jobNewCaroucel
  sub

  constructor(private title:Title, private apiService: ApiService) {
    this.title.setTitle('اپلیکیشن کوشی | یافتن تمامی مشاغل و اصناف شهر');
   }

   ngOnInit(){
     this.sub = this.apiService.getData('api/v1/Slider').subscribe(
       (response: string[])=>{
         this.sliderSource = response
       });

    this.sub = this.apiService.getData('api/v1/JobTop').subscribe(
    (response)=>{
      this.jobTopCaroucel = response['list'];
    });

    this.sub = this.apiService.getData('api/v1/job').subscribe(
      (response)=>{
        this.jobNewCaroucel = response['list']
      });
   }

   ngOnDestroy(){
    this.sub.unsubscribe();
   }
}
