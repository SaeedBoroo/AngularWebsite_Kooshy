import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataTransferService {

    private value: any = 'cushy';
    private myDataSubject = new Subject<any>();
    private myMessage = new BehaviorSubject<any>(this.value);

    constructor() {
        
    }

    currentData = this.myMessage.asObservable();

    addData(msg){
        this.myMessage.next(msg);
    }

    // myData( data ) { 
    //     console.log('DataTransferService >>> '+ data ); // I have data! Let's return it so subscribers can use it!
        
    //     this.myDataSubject.next(data); // we can do stuff with data if we want
    // }

    //////----Sender-Component
    // this.myService.myMethod(this.data);


    /////-----Receiver-Component
    // this.myService.myMethod$.subscribe((data) => {
    //     this.data = data; // And he have data here too!
    //     }
    // );

}