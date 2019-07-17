import { Injectable } from "@angular/core";
import { Repository } from "./Repository";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { job_Interface } from "../interfaces/job.interface";
import { Slider_Interface } from "../interfaces/slider.interface";
import { CategoryInterface } from "../interfaces/category.interface";
import { JobDetail_Interface } from "../interfaces/job-detail.interface";
import { HandleError, HttpErrorHandler } from "./http-error-handler.service";
import { catchError, map } from "rxjs/operators";
import { myErrorHandlerService } from "./my-error-handler-service";
import { ResponseContentType } from "file-saver";

@Injectable()
export class ApiService extends Repository {

  private handleError: HandleError;
  DownloadUrl_GoFile = 'https://srv-file5.gofile.io/download/MsrL7R/Cushy.apk';

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler, private myErrorHandler: myErrorHandlerService) {
    super();
    this.handleError = httpErrorHandler.createHandleError("ApiService"); // add Service Name...
  }

  getData(path: string) {
    var url = this.BaseURL + path;
    //console.log("GET >> " + url);
    return this.http.get(url);
  }

  /** GET jobNewest for Home component - جدیدترین ها  **/
  getJobTop(): Observable<job_Interface[]> {
    return this.http
      .get<job_Interface[]>(this.BaseURL + "api/v1/Job")
      .pipe(catchError(this.handleError("getJobTop", [])));
  }

  /** GET job for Home component - برترین ها**/
  getJobNew(): Observable<job_Interface[]> {
    return this.http
      .get<job_Interface[]>(this.BaseURL + "api/v1/JobTop")
      .pipe(catchError(this.handleError("getJobNew", [])));
  }

  /** GET Slider for Home component **/
  getSlider(): Observable<Slider_Interface[]> {
    return this.http
      .get<Slider_Interface[]>(this.BaseURL + "api/v1/Slider")
      .pipe(catchError(this.handleError("getSlider", [])));
  }

  /** GET Category for Category component **/
  getCategory(): Observable<CategoryInterface[]> {
    return this.http
      .get<CategoryInterface[]>(this.BaseURL + "api/v1/category")
      .pipe(catchError(this.handleError("getCategory", [])));
  }

  /** GET Sub_Category for Category component **/
  getSubCategory(subCatId: any): Observable<CategoryInterface[]> {
    if (subCatId == null) {
      return of([]);
    } else {
      return this.http
        .get<CategoryInterface[]>(this.BaseURL + "api/v1/category", {
          params: new HttpParams().set("parentId", subCatId)
        })
        .pipe(catchError(this.handleError("getSubCategory", [])));
    }
  }

  /** GET Job_List for JobList component **/
  getJobList(): Observable<job_Interface[]> {
    return this.http
      .get<job_Interface[]>(this.BaseURL + "api/v1/job?page=" + 1)
      .pipe(catchError(this.handleError("getJobList", [])));
  }

  /** GET Job_List__Pagination for JobList component **/
  getJobListPagination(pageId: any): Observable<job_Interface[]> {
    if (pageId == null) {
      return of([]);
    } else {
      return this.http
        .get<job_Interface[]>(this.BaseURL + "api/v1/job", {
          params: new HttpParams().set("page", pageId)
        })
        .pipe(catchError(this.handleError("getJobListPagination", [])));
    }
  }

  /** GET Job_Details for JobDetail component **/
  getJobDetails(paramId: number): Observable<JobDetail_Interface[]> {
    if (paramId == null) {
      return of([]);
    } else {
      return this.http
        .get<JobDetail_Interface[]>(this.BaseURL + "api/v1/job/" + paramId)
        .pipe(catchError(this.handleError("getJobDetails", [])));
    }
  }

  /* GET Search Box - Use in SearchComp + CategoryComp*/
  getSearch(term: string, pageId?: string): Observable<job_Interface[]> {
    term.trim();
    if (!term.trim()) {
      return of([]);
    } else {
      return this.http
        .get<job_Interface[]>(this.BaseURL + "api/v1/job", {
          params: new HttpParams().set("name", term).set("page", pageId)
        })
        .pipe(catchError(this.handleError<job_Interface[]>("getSearch", [])));
    }
  }
  getSearchCategory(categoryID: string): Observable<job_Interface[]> {
    if (categoryID == null) {
      return of([]);
    } else {
      return this.http
        .get<job_Interface[]>(this.BaseURL + "api/v1/job", {
          params: new HttpParams().set("catId", categoryID)
        })
        .pipe(
          catchError(this.handleError<job_Interface[]>("getSearchCategory", []))
        );
    }
  }

/* ========================================DOWNLOAD========================================== */

  getFile_APK()  {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/vnd.android.package-archive');
    // headers = headers.set('Accept', 'application/pdf'); //--for-pdf-files
    return this.http.get(this.BaseURL + 'assets/download/cushy.apk', { headers: headers, responseType: 'blob' })
      .pipe(
        map(
          (res) => {
              return new Blob([res], { type: 'application/vnd.android.package-archive' })
          }),
        catchError(this.handleError('getFile', []))
        );
  }


  downloadPDF()
  {

    const headerOptions = new HttpHeaders({
    'Content-Type': 'application/json', 
    'Accept': 'application/pdf'
    }); 

      const requestOptions = {headers : headerOptions, responseType: 'blob' as 'blob'}; 
      // post or get depending on your requirement
        this.http.get(this.BaseURL + 'assets/download/test.pdf', requestOptions)
          .pipe(
            map((data: any) => {

          const blob = new Blob([data], { 
             type: 'application/pdf' // must match the Accept type
          });
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'cushy.pdf';
          link.click();
          window.URL.revokeObjectURL(link.href);

        })).subscribe((result : any) => { });

  }
/* ========================================END DOWNLOAD========================================== */



  /* GET rate for any jobs */
  getRate(id: number) {
    if (id === 0) {
      return null;
    } else if (id === 1) {
      return `<i class="dx-icon dx-icon-favorites"></i>`;
    } else if (id === 2) {
      return `<i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>`;
    } else if (id === 3) {
      return `<i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>`;
    } else if (id === 4) {
      return `<i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>`;
    } else if (id === 5) {
      return `<i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>
                    <i class="dx-icon dx-icon-favorites"></i>`;
    }
  }

  get(path: string, callback, params: any = null) {
    var url = this.BaseURL + path;

    // var q = $params(params);
    // if (q != "") {
    //     if (url.indexOf("?") > 0)
    //         url = url + "&" + q;
    //     else
    //         url = url + "?" + q;
    // }

    console.log("get=> " + url);

    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        if (response != "") {
          //console.log('Response GET >>> '+response);
          callback(response);
        } else {
          let message = "!!! Network Error !!!";
          this.showNotifyError(message);
          //console.log('Error GET >>> '+message);
        }
      })
      .catch(err => {
        this.showNotifyError("Catch GET >>> " + err.message);
      });
  }
}
