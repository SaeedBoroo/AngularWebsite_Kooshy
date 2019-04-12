import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api-service.service';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../../interfaces/category.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent implements OnInit {

  getCategory_list: CategoryInterface[];
  getCategory_totalItems: number;
  category_or_SubCategory: boolean = true;
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
          this.getCategory_list = response['list']
          this.getCategory_totalItems = response['totalItems']
          this.title.setTitle('دسته بندی مشاغل کوشی');
        }
        
      });
      this.category_or_SubCategory = true;
      
   }

   onClickMoveToSubCategory( subCatId: number){
    this.subscribtion = this.apiService.getSubCategory(subCatId).subscribe(
      (response) => {
        if(response['list'] == undefined){
          this.isLoading = true;
        }
        else{
          this.isLoading = false;
          this.getCategory_list = response['list']
          this.getCategory_totalItems = response['totalItems']
        }
        
      });

      this.activeRoute.queryParams.subscribe(
        (params) => {
          this.parentCategoryNameInParam = params['parentName']
          this.title.setTitle( this.parentCategoryNameInParam + '| دسته بندی کوشی' );
        } );
      this.category_or_SubCategory = false;
   }


  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
