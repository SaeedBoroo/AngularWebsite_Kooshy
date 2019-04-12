import { Observable } from 'rxjs';
import { Repository } from './Repository';

export class myErrorHandlerService extends Repository {
    constructor(){super()}

    handlingError(error: Response){
        //these errors are Unexpected error. NotFound(404) - BadRequest(400) - and ...
        if( error.status === 400 ){
            return Observable.throw(this.showNotifyError('درخواست به سرور با مشکل روبرو شده است - 400'))
        }
        if( error.status === 404 ){
            return Observable.throw(this.showNotifyError('404 - رخدادی وجود ندارد'))
        }
        return Observable.throw(this.showNotifyError('ارور دیگر ارورها'))
    }
}