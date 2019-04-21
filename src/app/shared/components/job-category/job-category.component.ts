import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api-service.service';
import { CategoryInterface } from '../../interfaces/category.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { job_Interface } from '../../interfaces/job.interface';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent implements OnInit {

  getCategoryAll: CategoryInterface[];
  getJobsList4Cat: job_Interface[];
  isCategoryLevelMode: number
  parentCategoryName: string
  subCategoryName: string
  subCategoryId: string
  private subscribtion: any
  isLoading: boolean
  isFoundData: boolean
  paramId_url:number

  constructor(private title: Title, private apiService: ApiService,private transData:DataTransferService, private AvtiveRoute:ActivatedRoute) {}

  ngOnInit() {

    this.getCategory();
    
    //  this.AvtiveRoute.params.subscribe( //First-data---or-write-ID-in-URL
    //   (params: Params)=>{
    //     this.paramId_url = +params['id'] || 0
    //   });
    // this.onClickMoveToSubCategory( this.paramId_url, null);

  }

  getCategory(): void {
    this.isLoading = true;
    this.subscribtion = this.apiService.getCategory().subscribe(
      (response) => {
        if(response['list'] == undefined){
          this.isLoading = false;
          this.isFoundData = false;
          
        }
        else{
          this.isLoading = false;
          this.isFoundData = true;
          this.getCategoryAll = response
          this.title.setTitle('دسته بندی مشاغل و اصناف | کوشی');
        }
        
      });
      this.isCategoryLevelMode = 1;
      
   }

   onClickMoveToSubCategory( subCatId: number, mainCatName: string){
    this.isLoading = true;
    this.subscribtion = this.apiService.getSubCategory(subCatId).subscribe(
      (response) => {
        if(response['list'] == undefined){
          this.isLoading = false;
          this.isFoundData = false;
        }
        else{
          this.isLoading = false;
          this.isFoundData = true;
          this.getCategoryAll = response          
          this.parentCategoryName = mainCatName
          this.title.setTitle(this.parentCategoryName + ' | اپلیکیشن کوشی');
        }
        
      });

      // this.activeRoute.queryParams.subscribe(
      //   (params) => {
      //     this.parentCategoryNameInParam = params['parentName']
      //     this.title.setTitle( this.parentCategoryNameInParam + '| دسته بندی مشاغل کوشی' );
      //   } );

      this.isCategoryLevelMode = 2;
   }

   onClickMoveToJobsList4Cat( catID: string, subCatName:string ){
     debugger
    this.subscribtion = this.apiService.getSearchCategory(catID).subscribe(
      (response) => {
        //console.log('search no >> ',response)
        if(response['list'] == 0){
          this.isFoundData = false;
        }
        else{
          //console.log('search yea >> ',response)
          this.isFoundData = true;
          this.getJobsList4Cat = response
          this.subCategoryName = subCatName
          this.subCategoryId = catID
          this.title.setTitle(this.parentCategoryName + ' > ' + this.subCategoryName);
        }
        
      });
      this.isCategoryLevelMode = 3;
   }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
