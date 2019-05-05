import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { JobDetail_Interface } from '../../interfaces/job-detail.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit,OnDestroy {

  jobDetail: JobDetail_Interface[]
  name_JobDetail: string
  private subscribtion: Subscription
  private paramId: number
  galleryJobDetail: string[]
  rateId_JobDetail: number
  rate_JobDetail: any
  longitude_JobDetail: any
  latitude_JobDetail: any
  mapLocation: any[]
  noDataFoundNow: string
  DataFound: boolean = true
  isLoading: boolean
  TotalJobItems : number
  // bingMapIconUrl: string = 'http://cushy.ir/assets/images/cushy-telegram-app-64.png'
  // bingKeyMap: string = 'AgIIMjI17c8_YnI_Rtfo2eecr1PI8BJlDltEQ_IuXdticdlaLntt0ZeLtxIlnnLH'
  // bingMapType: string = 'satellite'



  constructor(private title:Title, private apiService: ApiService, private AvtiveRoute: ActivatedRoute , private router:Router) {
    }

  ngOnInit() {
    

    this.paramId = +this.AvtiveRoute.snapshot.params['id']; //just change URL.
    this.subscribtion = this.AvtiveRoute.params.subscribe( //Change data 
      (params: Params)=>{
        this.paramId = +params['id']
      });
    this.getJobDetails( this.paramId );


     //----Scrol to top default 
     this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
  };
     this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0);
      }
    });

  }



noDataFound(){ //if there is no data with selection param ID. show this...
  this.AvtiveRoute.data.subscribe(
    data => this.noDataFoundNow = data['noDataFound']
  );
  this.DataFound = false;
}



getJobDetails( paramId:number ){
  this.apiService.getJobTop().subscribe( resp => {
    this.TotalJobItems = resp['totalItems'];

    if( paramId > this.TotalJobItems+3  || paramId == 0){
       this.noDataFound()
    }
    else{
      this.isLoading = true;
      this.subscribtion = this.apiService.getJobDetails( paramId ).subscribe((response)=>{
        if( response.length == 0){
          this.isLoading = false;
          this.DataFound = false;
          this.noDataFound()
        }
        else{
          this.isLoading = false;
          this.DataFound = true;
          this.jobDetail = response;
          this.galleryJobDetail = response['pics'];
          this.name_JobDetail = response['name'];
          this.rateId_JobDetail = response['rate'];
          this.longitude_JobDetail = response['longitude'];
          this.latitude_JobDetail = response['latitude'];
          this.title.setTitle( this.name_JobDetail + ' | اپلیکیشن کوشی');
          this.rate_JobDetail = this.apiService.getRate( this.rateId_JobDetail );
  
          // this.mapLocation = [{
          //   location: {
          //     lat: this.latitude_JobDetail,
          //     lng: this.longitude_JobDetail
          // },
          //     tooltip: {
          //         isShown: true,
          //         text: this.name_JobDetail
          //     }
          // }];
        }
      });
    }

  });


}

  onClickBackToJobList(){
    this.router.navigate(
      ['/jobs-list'], 
      {
        relativeTo: this.AvtiveRoute,
      });
  }


  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
