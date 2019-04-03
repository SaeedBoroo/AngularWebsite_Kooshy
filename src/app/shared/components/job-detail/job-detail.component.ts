import { Component, OnInit, OnDestroy, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobDetail_Interface } from '../../interfaces/job-detail.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit,OnDestroy {

  private jobDetail: JobDetail_Interface[]
  private subscribtion: Subscription
  private paramId: number
  private galleryJobDetail: string[]
  private nameJobDetail: string


  constructor(private title:Title, private apiServive: ApiService, private AvtiveRoute: ActivatedRoute , private router:Router) {
    }

  ngOnInit() {

    this.paramId = +this.AvtiveRoute.snapshot.params['id']; //just change URL.
    this.subscribtion = this.AvtiveRoute.params.subscribe( //Change data 
      (params: Params)=>{
        this.paramId = +params['id']
      });

    this.getJobDetails( this.paramId );
  }

getJobDetails( paramId:number ){
  this.subscribtion = this.apiServive.getJobDetails( paramId ).subscribe(
    (response)=>{
      this.jobDetail = response;
      this.galleryJobDetail = response['pics'];
      this.nameJobDetail = response['name'];
      this.title.setTitle( this.nameJobDetail );
    });
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
