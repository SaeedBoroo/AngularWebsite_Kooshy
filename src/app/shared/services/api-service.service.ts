import { Injectable, Inject } from '@angular/core';
import { Repository } from './Repository';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { job_Interface } from '../interfaces/job.interface';
import { Slider_Interface } from '../interfaces/slider.interface';
import { CategoryInterface } from '../interfaces/category.interface';
import { JobDetail_Interface } from '../interfaces/job-detail.interface';

declare function $params(obj: any): string;


@Injectable({ providedIn: 'root' })
export class ApiService extends Repository {
    
    constructor(private http: HttpClient){
        super()
    }

    
    getData(path:string){
        
        var url = this.BaseURL + path;
        //console.log("GET >> " + url);
        return this.http.get(url)
    }

    /** GET jobTop for Home component  **/
    getJobTop (): Observable<job_Interface[]> {
        return this.http.get<job_Interface[]>(this.BaseURL + 'api/v1/JobTop');
    }

    /** GET job for Home component **/
    getJobNew (): Observable<job_Interface[]> {
        return this.http.get<job_Interface[]>(this.BaseURL + 'api/v1/Job');
    }

    /** GET Slider for Home component **/
    getSlider (): Observable<Slider_Interface[]> {
        return this.http.get<Slider_Interface[]>(this.BaseURL + 'api/v1/Slider');
    }

    /** GET Category for Category component **/
    getCategory (): Observable<CategoryInterface[]> {
        return this.http.get<CategoryInterface[]>(this.BaseURL + 'api/v1/category');
    }

    /** GET Sub_Category for Category component **/
    getSubCategory ( subCatId: number ): Observable<CategoryInterface[]> {
        if(subCatId == null)
            { return of([]); }
        else{
            return this.http.get<CategoryInterface[]>(this.BaseURL + 'api/v1/category?parentId=' + subCatId);
        }
    }

    /** GET Job_List for JobList component **/
    getJobList (): Observable<job_Interface[]> {
        return this.http.get<job_Interface[]>(this.BaseURL + 'api/v1/job?page=' + 1);
    }

    /** GET Job_List__Pagination for JobList component **/
    getJobListPagination ( pageId: number ): Observable<job_Interface[]> {
        if( pageId == null)
            { return of([]); }
        else{
            return this.http.get<job_Interface[]>(this.BaseURL + 'api/v1/job?page=' + pageId);
        }
    }

    /** GET Job_Details for JobDetail component **/
    getJobDetails ( paramId: number ): Observable<JobDetail_Interface[]> {
        if( paramId == null)
            { return of([]); }
        else{
            return this.http.get<JobDetail_Interface[]>(this.BaseURL + 'api/v1/job/' + paramId);
            
        }
    }

    /* GET Search Box */
    getSearch( term: string ): Observable<job_Interface[]> {
        if (!term.trim()) 
        {   return of([]);}
        else{
            return this.http.get<job_Interface[]>(this.BaseURL + 'api/v1/job?name=' + term);
        }
    }

    /* GET rate for any jobs */
    getRate( id:number ){
        if(id == 0){
            return null;
        }
        else if(id == 1){
            return `<i class="dx-icon dx-icon-favorites"></i>`;
        }
        else if(id == 2){
            return `<i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>`;
        }
        else if(id == 3){
            return `<i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>`;
        }
        else if(id == 4){
            return `<i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>`;
        }
        else if(id == 5){
            return `<i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>`;
        }
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
                    //console.log('Response GET >>> '+response);
                    callback(response);
                }
                else {
                    let message = '!!! Network Error !!!';
                    this.showNotifyError(message);
                    //console.log('Error GET >>> '+message);
                }
            }).catch(err => {
                this.showNotifyError('Catch GET >>> '+err.message);
            });
    }
    
}