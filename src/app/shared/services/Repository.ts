import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import notify from 'devextreme/ui/notify';

export abstract class Repository {

    public BaseURL: string = environment.url;
    public BaseURL_localhost: string = environment.url_localhost;
    public isLoading: boolean ;

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
    protected showNotifyInfo(message: string) {
        notify({
            message: message,
            type: "info",
            width: 400,
            displayTime: 8000,
            closeOnClick: true,
            closeOnOutsideClick: true
        });
    }

    // showLoading() {
    //     this.isLoading = true;
    // }

    // hideLoading() {
    //     this.isLoading = false;
    // }
}