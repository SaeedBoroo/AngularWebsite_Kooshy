import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { HttpLogMessageService } from './http-log-message.service';
import { Repository } from './Repository';



/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;


  
/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler extends Repository {

  constructor(private messageService: HttpLogMessageService) { 
    super()
    this.isLoading = true;
  }

  /** Create curried handleError function that already knows the service name */
    /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      if(error.status === 400){ this.showNotifyError('درخواست به سرور با مشکل روبرو شده است - 400'); }
      if(error.status === 404){ this.showNotifyError('درخواست شما وجود ندارد - 404'); }
      this.showNotifyError('متاسفانه ارتباط با سرور قطع می باشد. لطفا مجدد صفحه را بارگذاری کنید')

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `>> server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

      // Let the app keep running by returning a safe result.
      return of( result );
    };

  }
}
