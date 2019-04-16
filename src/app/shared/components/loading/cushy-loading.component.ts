import { Component, Input } from '@angular/core';

@Component({
    selector:'cushy-loading',
    templateUrl:'./cushy-loading.component.html'
     
})

export class CushyLoadingComponent  {

    @Input('errorMsg') msg: string;
    constructor(){}

}