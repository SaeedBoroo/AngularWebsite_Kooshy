import { Component, Input } from '@angular/core';

@Component({
    selector:'cushy-no-found-data',
    templateUrl:'./cushy-no-found-data.component.html'
     
})

export class cushyNoFoundDataComponent  {

    @Input('msg') msg: string;
    constructor(){}

}