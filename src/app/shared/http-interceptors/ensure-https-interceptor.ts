import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // clone request and replace 'http://' with 'https://' at the same time
        const secureReq = req.clone({
            url: req.url.replace('https://', 'http://')
        });
        // send the cloned, "secure" request to the next handler.
        //console.log('secureReq >> ', secureReq)
        return next.handle(secureReq);
        
    }
}

