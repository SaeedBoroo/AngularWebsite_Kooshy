import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  longtabs: [
    { text: "user" },
    { text: "analytics" },
    { text: "customers" },
    { text: "search" },
    { text: "favorites" },
    { text: "additional" },
    { text: "clients" },
    { text: "orders" },
    { text: "shipment" }
];;

  constructor() { }

  ngOnInit() {
  }

}
