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
        console.log("GET >> " + url);
        return this.http.get(url)
    }

     get(path:string, callback, params: any = null) {
        debugger
        var url = this.BaseURL + path;

        // var q = $params(params);
        // if (q != "") {
        //     if (url.indexOf("?") > 0)
        //         url = url + "&" + q;
        //     else
        //         url = url + "?" + q;
        // }

        console.log("get=> " + url);

         return this.http.get(url)
            .toPromise()
            .then(response => {
                if (response != ''){
                    console.log('Response GET >>> '+response);
                    callback(response);
                }
                else {
                    let message = '!!! Network Error !!!';
                    this.showNotify(message);
                    console.log('Error GET >>> '+message);
                }
            }).catch(err => {
                this.showNotify('Catch GET >>> '+err.message);
            });
    }
    
}