import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import notify from 'devextreme/ui/notify';

export class Repository {

    busyStack: Array<boolean> = new Array<boolean>();
    public BaseURL: string = environment.url;

    protected showNotifyError(message: string) {
        notify({
            message: message,
            type: "error",
            width: 400,
            displayTime: 8000,
            closeOnClick: true,
            closeOnOutsideClick: true
        });
    }
    protected showNotifySuccess(message: string) {
        notify({
            message: message,
            type: "success",
            width: 400,
            displayTime: 8000,
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