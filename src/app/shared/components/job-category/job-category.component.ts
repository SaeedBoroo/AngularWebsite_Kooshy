import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api-service.service';
import { CategoryInterface } from '../../interfaces/category.interface';
import { ActivatedRoute } from '@angular/router';
import { job_Interface } from '../../interfaces/job.interface';

@Component({
  selector: 'job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent implements OnInit {

  getCategoryAll: CategoryInterface[];
  getJobsList4Cat: job_Interface[];
  isCategoryLevelMode: number
  private parentCategoryNameInParam: string
  private subscribtion: any
  isLoading: boolean

  constructor(private title: Title, private apiService: ApiService, private activeRoute:ActivatedRoute) {}

  ngOnInit() {
    this.getCategory();

  }

  getCategory(): void {
    this.subscribtion = this.apiService.getCategory().subscribe(
      (response) => {
        if(response['list'] == undefined){
          this.isLoading = true;
        }
        else{
          this.isLoading = false;
          this.getCategoryAll = response
          this.title.setTitle('دسته بندی مشاغل و اصناف | کوشی');
        }
        
      });
      this.isCategoryLevelMode = 1;
      
   }

   onClickMoveToSubCategory( subCatId: number){
    this.subscribtion = this.apiService.getSubCategory(subCatId).subscribe(
      (response) => {
        if(response['list'] == undefined){
          this.isLoading = true;
        }
        else{
          this.isLoading = false;
          this.getCategoryAll = response
        }
        
      });

      this.activeRoute.queryParams.subscribe(
        (params) => {
          this.parentCategoryNameInParam = params['parentName']
          this.title.setTitle( this.parentCategoryNameInParam + '| دسته بندی مشاغل کوشی' );
        } );
      this.isCategoryLevelMode = 2;
   }

   onClickMoveToJobsList4Cat( catName: string ){
     debugger
    this.subscribtion = this.apiService.getSearch(catName).subscribe(
      (response) => {
        //console.log('search no >> ',response)
        if(response['list'] == 0){
          this.isLoading = true;
        }
        else{
          //console.log('search yea >> ',response)
          this.isLoading = false;
          this.getJobsList4Cat = response
        }
        
      });
      this.isCategoryLevelMode = 3;
   }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
