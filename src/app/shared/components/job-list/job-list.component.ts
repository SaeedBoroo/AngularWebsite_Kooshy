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
  showJobList: boolean = true
  pageIdJobs: number ;
  private subscribtion: any

  constructor(private title: Title, private apiServive: ApiService, private router:Router, private AvtiveRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.title.setTitle('لیست مشاغل کوشی');

    this.AvtiveRoute.queryParams.subscribe(
      resp => this.pageIdJobs = resp['page'] || 1
    );
    
    this.getJobList(this.pageIdJobs);

    
  }

  getJobList( pageIdJobs ){
    this.subscribtion = this.apiServive.getJobListPagination( pageIdJobs ).subscribe(
      response => this.JobLists_All = response);
      this.showJobList = true;
  }

  onClickMovePagesJob( pageId:number ){
    this.subscribtion = this.apiServive.getJobListPagination( pageId ).subscribe(
      (response) =>{
        this.JobLists_All = response;
        this.showJobList= true;
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
