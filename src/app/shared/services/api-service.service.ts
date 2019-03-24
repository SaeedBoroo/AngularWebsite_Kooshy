import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from './Repository';

declare function $params(obj: any): string;


@Injectable()
export class ApiService extends Repository {
    
    constructor(private http: HttpClient){
        super()
    }

    
    getData(path:string){
        
        var url = this.BaseURL + path;
        return this.http.get(url)
    }

    public get(path, callback = null, params: any = null, onError = null) {
        debugger
        var url = this.BaseURL + path;
        var q = $params(params);

        if (q != "") {
            if (url.indexOf("?") > 0)
                url = url + "&" + q;
            else
                url = url + "?" + q;
        }

        console.log("get=> " + url);

         this.http.get(url)
            .toPromise()
            .then(response => {
                console.log(response);
                if (response != '')
                    callback(response);
                else {
                    let message = '!!! Network Error !!!';
                    this.showNotify(message);
                    console.log(message);
                    if (onError != null) {
                        onError();
                    }
                }
            }).catch(err => {
                this.showNotify(err.message);
            });
    }
    
}