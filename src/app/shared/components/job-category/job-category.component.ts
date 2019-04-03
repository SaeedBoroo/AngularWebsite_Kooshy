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

  private _getCategory: CategoryInterface[];
  private category_or_SubCategory: boolean = true;
  private parentCategoryNameInParam: string
  private subscribtion: any

  constructor(private title: Title, private apiService: ApiService, private activeRoute:ActivatedRoute) {}

  ngOnInit() {
    this.getCategory();

  }

  getCategory(): void {
    this.subscribtion = this.apiService.getCategory().subscribe(
      response => this._getCategory = response);
      this.category_or_SubCategory = true;
      this.title.setTitle('دسته بندی مشاغل کوشی');
   }

   onClickMoveToSubCategory( subCatId: number){
    this.subscribtion = this.apiService.getSubCategory(subCatId).subscribe(
      response => this._getCategory = response);

      this.activeRoute.queryParams.subscribe(
        params => this.parentCategoryNameInParam = params['parentName'] );

      this.title.setTitle( 'زیر دسته بندی مشاغل کوشی' );

      this.category_or_SubCategory = false;
   }

   onClickMoveToMainCategory(): void{
    this.getCategory();
   }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
