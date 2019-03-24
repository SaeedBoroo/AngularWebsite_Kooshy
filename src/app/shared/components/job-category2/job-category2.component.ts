import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-category2',
  templateUrl: './job-category2.component.html',
  styleUrls: ['./job-category2.component.scss']
})
export class JobCategory2Component implements OnInit {
  
  category
  private sub
  private sub2
  parentId

  constructor(private title: Title, private apiServive: ApiService, private route: ActivatedRoute) {
    this.title.setTitle('زیر دسته بندی مشاغل')
   }

  ngOnInit() {
    
    this.sub = this.route.queryParams.subscribe(params => {
      this.parentId = +params['parentId'] || 0;
    });

    this.sub2 = this.apiServive.getData('api/v1/category?parentId=' + this.parentId).subscribe(
      (response)=>{
        this.category = response
        
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

}
