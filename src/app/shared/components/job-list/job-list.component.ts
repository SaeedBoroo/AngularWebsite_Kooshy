import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  job_lists = []
  id:number = 1
  private sub

  constructor(private title: Title, private apiServive: ApiService) {
    this.title.setTitle('لیست مشاغل')
   }

  ngOnInit() {
    debugger
    this.sub = this.apiServive.getData('api/v1/job').subscribe(
      (response:[])=>{
        this.job_lists = response
    });
  }

  onClickPagesJobs(id:number){
    this.sub = this.apiServive.getData('api/v1/job?page=' + id ).subscribe(
      (response:[])=>{
        this.job_lists = response
    });
  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
