import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import notify from 'devextreme/ui/notify';

export class Repository {

    busyStack: Array<boolean> = new Array<boolean>();
    public BaseURL: string = environment.api_url;

    protected showNotify(message: string) {
        notify({
            message: message,
            type: "error",
            width: 400,
            displayTime: 10000,
            closeOnClick: true,
            closeOnOutsideClick: true
        });
    }

    // protected showLoading() {
    //     this.busyStack.push(true);
    //     this.eventsService.broadcast("loading", this.isBusy());
    // }

    // protected hideLoading() {
    //     this.busyStack.pop();
    //     this.eventsService.broadcast("loading", this.isBusy());
    // }
}