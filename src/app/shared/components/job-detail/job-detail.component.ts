import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  job_detail = []
  sub
  id: number
  galleryJobDetail: string[]


  constructor(private title:Title,
     private apiServive: ApiService,
     private route: ActivatedRoute     ) {
    this.title.setTitle('جزئیات هر شغل');
   }

  ngOnInit() {
debugger
    this.id = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id']
      });

    console.log('ID>>' + this.id)

    this.sub = this.apiServive.getData('api/v1/job/' + this.id ).subscribe(
      (resp:[])=>{
        this.job_detail = resp;
        this.galleryJobDetail = resp['pics'];
      });
  }

}
