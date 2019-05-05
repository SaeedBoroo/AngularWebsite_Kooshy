import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataTransferService, ApiService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { job_Interface } from '../../interfaces/job.interface';

@Component({
  selector: 'job-search-result',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  private mySubscribes: any
  isLoading: boolean = false
  isFoundSearch: boolean = true
  searchTerm: string
  searchResult: job_Interface[]
  paginationId : number


  constructor(private title: Title, private dataTrans: DataTransferService,
    private router: Router, private apiService: ApiService, private AvtiveRoute: ActivatedRoute ) {   }

  ngOnInit() {
    this.title.setTitle('جستجوی مشاغل و اصناف شهر | کوشی');
    this.getDataFromHeader();
  }


  getDataFromHeader(){
    this.dataTrans.currentData.subscribe(msg => this.searchTerm = msg);

    this.mySubscribes = this.apiService.getSearch(this.searchTerm).subscribe(
      response => {
        if(response['list'] == 0){
          this.isFoundSearch = false;
        }
        else{
          this.isFoundSearch = true;
          this.isLoading = true;
          this.searchResult = response
        }
        this.isLoading = false;
      })
  }

  
  onClickMoveOtherPages( pageId ){

    this.mySubscribes = this.apiService.getSearch( this.searchTerm , pageId ).subscribe(
      (response) =>{
        if(response['list'] == 0){
          this.isFoundSearch= false;
          }
        else {
          this.isFoundSearch= true;
          this.isLoading = true;
          this.searchResult = response;
        }
        this.isLoading = false;
      });
      // this.router.navigate(
      //   ['/search'], 
      //   {
      //     relativeTo: this.AvtiveRoute,
      //     queryParams: { q:this.searchTerm, page: pageId },
      //     queryParamsHandling: "merge"
      //   });
  }

  ngOnDestroy() {
    this.mySubscribes.unsubscribe();
  }
}
