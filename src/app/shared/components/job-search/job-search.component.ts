import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  sub
  query: string | number
  searchResult

  constructor(private title: Title,
    private apiServive: ApiService, 
    private route: ActivatedRoute) 
    {
    this.title.setTitle('جستجوی مشاغل')
    console.log('Result>>> ')
   }

  ngOnInit() {
    // this.sub = this.route.queryParams.subscribe(params => {
    //   this.query = params['q'] || 'استاد رشید';
    // });

    // this.sub = this.apiServive.getData('api/v1/api?name=' + this.query).subscribe(
    //   (response)=>{
    //     this.searchResult = response
        
    // });   
  }

  onClickPagesJobs(id:number){
    // this.sub = this.apiServive.getData('api/v1/job?page=' + id ).subscribe(
    //   (response)=>{
    //     this.searchResult = response
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
