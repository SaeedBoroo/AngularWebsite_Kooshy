import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services';
import { Slider_Interface } from '../../interfaces/slider.interface';
import { job_Interface } from '../../interfaces/job.interface';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})


export class HomeComponent implements OnInit,OnDestroy  {

  sliderSource: Slider_Interface[] 
  jobTopCaroucel: job_Interface[]
  jobNewCaroucel: job_Interface[]
  isLoading_Slider: boolean
  isLoading_Top: boolean
  isLoading_New: boolean
  mySubscribe: any

  constructor(private title:Title, private apiService: ApiService) {   }

  ngOnInit(){

    this.title.setTitle('اپلیکیشن کوشی | یافتن تمامی مشاغل و اصناف شهر');

    this.getJobTop();
    this.getJobNew();
    this.getSlider();



   }


  getJobTop(): void {
   this.mySubscribe = this.apiService.getJobTop()
      .subscribe( response => { 
         if(response['list'] == undefined) {
            this.isLoading_Top = true
         }
         else{
          this.isLoading_Top = false
          this.jobTopCaroucel = response['list']
         }
         
        })
   }
  getJobNew(): void {
    this.mySubscribe = this.apiService.getJobNew()
    .subscribe( response => { 

       if(response['list'] == undefined) {
          this.isLoading_New = true
       }
       else{
        this.isLoading_New = false
        this.jobNewCaroucel = response['list']
       }
       
      })

   }
  getSlider(): void {
    this.mySubscribe = this.apiService.getSlider().subscribe( response => {
      if(response.length == 0) {
          this.isLoading_Slider = true
      }
      else{
        this.isLoading_Slider = false
        this.sliderSource = response
      }
    })

   }


  ngOnDestroy(){
     this.mySubscribe.unsubscribe();
   }
}
