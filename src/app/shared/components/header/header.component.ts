import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService, ApiService, DataTransferService } from '../../services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Output() menuToggle = new EventEmitter<boolean>();
  @Input() menuToggleEnabled = false;
  @Input() title: string;
  searchResult

  userMenuItems = [{
    text: 'درباره ما',
    icon: 'info',
    onClick: () => {
      this.router.navigate(['/about-us']);
    }
  }];

  constructor(private router: Router,
     private apiService: ApiService,
     private dataTransfer: DataTransferService){}

  toggleMenu = () => {
    this.menuToggle.emit();
  }

  //---Search---
  onClickSearch(querySearch){
    debugger
    this.apiService.getData('api/v1/job?name=' + querySearch ).subscribe(
      (res)=>{
        this.searchResult = res;
      })

    this.dataTransfer.myData(this.searchResult);

    this.router.navigate(['/search'], { queryParams: { q: querySearch } })
  }

}

