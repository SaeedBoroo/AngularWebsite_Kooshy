import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ApiService, DataTransferService } from '../../services';
import { Router } from '@angular/router';
import { job_Interface } from '../../interfaces/job.interface';
import { Subject, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '316px',
        transform: 'translateY(0px)',
        opacity: 1,
        overflow: 'hidden auto'
      })),
      state('closed', style({
        transform: 'translateY(50px)',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})

export class HeaderComponent implements OnInit,OnDestroy {

  @Output() menuToggle = new EventEmitter<boolean>();
  @Input() menuToggleEnabled = false;
  @Input() title: string;
  searchResult: Observable< job_Interface[]>
  private searchQuery = new Subject<string>();
  private subscribtion: Subscription
  isOpen: boolean = false;

  userMenuItems = [{
    text: 'درباره ما',
    icon: 'info',
    onClick: () => {
      this.router.navigate(['/about-us']);
    }
  }];

  constructor(private router: Router, private apiService: ApiService, private dataTransfer: DataTransferService){

  }

  //---Search---
search( term: string): void{
  
  this.subscribtion = this.apiService.getSearch( term ).subscribe( resp => this.searchResult = resp['list'])
  this.isOpen = true;

  // this.searchQuery.next( term );
  // this.searchResult = this.searchQuery.pipe(
  //   debounceTime(100),  // wait 100ms after each keystroke before considering the term
  //   distinctUntilChanged(),  // ignore new term if same as previous term
  //   switchMap((term: string) => this.apiService.getSearch(term)),  // switch to new search observable each time the term changes
  // );
}



onClickShowDetail( detail_Id:number ){

  this.router.routeReuseStrategy.shouldReuseRoute = function(){ //باید حتما صفحه رفرش بشه و اطلاعات جدید را بیاره
    return false;
  } 
  this.router.navigate(['/job-detail', detail_Id])

  this.searchResult = null;
  this.isOpen = false;
  this.ngOnDestroy();
}

  ngOnInit(){

    
    
  }




  // onClickSearch(querySearch){
  //   debugger
  //   this.apiService.getData('api/v1/job?name=' + querySearch ).subscribe(
  //     (res)=>{
  //       this.searchResult = res;
  //     })

  //   this.dataTransfer.myData(this.searchResult);

  //   this.router.navigate(['/search'], { queryParams: { q: querySearch } })
  // }

  toggleMenu = () => {
    this.menuToggle.emit();
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}

