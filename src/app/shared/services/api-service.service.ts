import { Injectable, Inject } from '@angular/core';
import { Repository } from './Repository';
import { Observable } from 'rxjs';
import { jobTop_Interface } from '../components/home/job-top.interface';
import { HttpClient } from '@angular/common/http';
import { jobNew_Interface } from '../components/home/job-new.interface';
import { Slider_Interface } from '../components/home/slider.interface';

declare function $params(obj: any): string;


@Injectable({ providedIn: 'root' })
export class ApiService extends Repository {
    
    constructor(private http: HttpClient){
        super()
    }

    
    getData(path:string){
        
        var url = this.BaseURL + path;
        console.log("GET >> " + url);
        return this.http.get(url)
    }

  /** GET jobTop for Home component  **/
    getJobTop (): Observable<jobTop_Interface[]> {
        return this.http.get<jobTop_Interface[]>(this.BaseURL + 'api/v1/JobTop');
    }

    /** GET job for Home component **/
    getJobNew (): Observable<jobNew_Interface[]> {
        return this.http.get<jobNew_Interface[]>(this.BaseURL + 'api/v1/Job');
    }

    /** GET Slider for Home component **/
    getSlider (): Observable<Slider_Interface[]> {
        return this.http.get<Slider_Interface[]>(this.BaseURL + 'api/v1/Slider');
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