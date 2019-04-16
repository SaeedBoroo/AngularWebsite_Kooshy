import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jobs-list-base',
  templateUrl: './jobs-list-base.component.html',
  styleUrls: ['./jobs-list-base.component.scss']
})
export class JobsListBaseComponent implements OnInit {

  @Input('myData') myData: any;
  @Output('myEventData') myEventData =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
