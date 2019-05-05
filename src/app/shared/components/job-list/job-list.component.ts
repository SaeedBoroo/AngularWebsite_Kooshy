import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api-service.service';
import { job_Interface } from '../../interfaces/job.interface';
import { Job_List } from '../../interfaces/list-of-job.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  JobLists_All: job_Interface[]
  JobLists_list: Job_List[]
  rate_JobList: any
  rateId_JobList: number = 0
  showJobList: boolean = true
  pageIdJobs: number ;
  isLoading: boolean
  private subscribtion: any

  constructor(private title: Title, private apiService: ApiService, private router:Router, private AvtiveRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.title.setTitle('لیست مشاغل و اصناف | کوشی');

    this.AvtiveRoute.queryParams.subscribe(
      resp => this.pageIdJobs = resp['page'] || 1
    );
    
    this.getJobList(this.pageIdJobs);

    
  }

  getJobList( pageIdJobs:number ){
    this.isLoading = true;
    this.subscribtion = this.apiService.getJobListPagination( pageIdJobs ).subscribe(
      (response) => {
      if(response['list'] == undefined) {
          this.showJobList= false;
       }
      else{
        if( pageIdJobs > response['totalPages'] ){
            this.showJobList= false;
        }else{
            this.isLoading = false;
            this.showJobList = true;
            this.JobLists_All = response
            this.JobLists_list = response['list']
            // this.rateId_JobList = new Job_List<this.JobLists_list>['rate']
            this.rate_JobList = this.apiService.getRate( this.rateId_JobList );
        }
        
       }

      });
      
  }

  onClickMovePagesJob( pageId:number ){
    this.isLoading = true;
    this.subscribtion = this.apiService.getJobListPagination( pageId ).subscribe(
      (response) =>{
        if(response['list'] == undefined){
          this.showJobList= false;
          }
        else {
          this.isLoading = false;
          this.JobLists_All = response;
          this.JobLists_list = response['list']
          this.showJobList= true;
        }
      });
      this.router.navigate(
        [], 
        {
          relativeTo: this.AvtiveRoute,
          queryParams: { page: pageId },
          queryParamsHandling: "merge"
        });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }


}
