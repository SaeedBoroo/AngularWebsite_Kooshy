import { Component, OnInit, OnDestroy, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { JobDetail_Interface } from '../../interfaces/job-detail.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit,OnDestroy {

  private jobDetail: JobDetail_Interface[]
  name_JobDetail: string
  private subscribtion: Subscription
  private paramId: number
  galleryJobDetail: string[]
  rateId_JobDetail: number
  rate_JobDetail: any
  private longitude_JobDetail: any
  private latitude_JobDetail: any
  private noDataFoundNow: string
  DataFound: boolean = true
  // private mapMarkerUrl: string = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";




  constructor(private title:Title, private apiService: ApiService, private AvtiveRoute: ActivatedRoute , private router:Router) {
    }

  ngOnInit() {
    
    // this.paramId = +this.AvtiveRoute.snapshot.params['id']; //just change URL.
    this.subscribtion = this.AvtiveRoute.params.subscribe( //Change data 
      (params: Params)=>{
        this.paramId = +params['id']
      });
    this.getJobDetails( this.paramId );

    
  }



noDataFound(){ //if there is no data with selection param ID. show this...
  this.AvtiveRoute.data.subscribe(
    data => this.noDataFoundNow = data['noDataFound']
  );
  this.DataFound = false;
}

getJobDetails( paramId:number ){
  if( paramId > 1060  || paramId == 0){
     this.noDataFound()
  }
  else{
  this.apiService.getJobDetails( paramId ).subscribe(
    (response)=>{
      if( response.length == 0){
        this.DataFound = false;
        this.noDataFound()
      }
      else{
        this.DataFound = true;
        this.jobDetail = response;
        this.galleryJobDetail = response['pics'];
        this.name_JobDetail = response['name'];
        this.rateId_JobDetail = response['rate'];
        this.longitude_JobDetail = response['longitude'];
        this.latitude_JobDetail = response['latitude'];
        this.title.setTitle( this.name_JobDetail );
        this.rate_JobDetail = this.apiService.getRate( this.rateId_JobDetail );
      }
      
      
      // var mapLocation: MapLocations[] = [{
      //   location: {
      //     lat: this.latitude_JobDetail,
      //     lng: this.longitude_JobDetail
      // },
      //     tooltip: {
      //         isShown: true,
      //         text: this.nameJobDetail
      //     }
      // }];
      
    });


  }
}

  onClickBackToJobList(){
    this.router.navigate(
      ['/job-list'], 
      {
        relativeTo: this.AvtiveRoute,
      });
  }


  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
