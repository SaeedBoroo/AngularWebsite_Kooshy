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
  placeHolderBox: string

  userMenuItems = [{
    text: 'درباره ما',
    icon: 'info',
    onClick: () => {
      this.router.navigate(['/about-us']);
    }
  }];

  constructor(private router: Router, private apiService: ApiService, private dataTransfer: DataTransferService){

  }
  ngOnInit(){


    
  }


  //---Search---Press-Enter--
search( term: string): void{
  
  // this.subscribtion = this.apiService.getSearch( term ).subscribe( resp => this.searchResult = resp['list'])
  // this.isOpen = true;
  this.router.routeReuseStrategy.shouldReuseRoute = function(){ //باید حتما صفحه رفرش بشه و اطلاعات جدید را بیاره
    return false;
  } 
  this.dataTransfer.addData( term );
  this.router.navigate(['/search'], { queryParams: { q: term } })

}



onClickShowDetail( detail_Id:number ){

  this.router.routeReuseStrategy.shouldReuseRoute = function(){ //باید حتما صفحه رفرش بشه و اطلاعات جدید را بیاره
    return false;
  } 
  this.router.navigate(['/job', detail_Id])

  this.searchResult = null;
  this.isOpen = false;
  this.ngOnDestroy();
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


//   navToTop(event) { //-----------------Scroll-to-TOP---------------------
//     let scrollToTop = window.setInterval(() => {
//         let pos = window.pageYOffset;
//         if (pos > 0) {
//             window.scrollTo(0, 0); 
//         } else {
//             window.clearInterval(scrollToTop);
//         }
//     }, 300);
// }


  toggleMenu = () => {
    this.menuToggle.emit();
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}

