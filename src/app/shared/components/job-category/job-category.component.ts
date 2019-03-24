import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent implements OnInit {

  category
  private sub

  constructor(private title: Title, private apiServive: ApiService) {
    this.title.setTitle('دسته بندی مشاغل')
   }

  ngOnInit() {
    debugger
    this.sub = this.apiServive.getData('api/v1/category').subscribe(
      (response)=>{
        this.category = response
        
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
