import { Injectable, EventEmitter } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {



  constructor(private http: HttpClient) { }

  dummyload(): Observable<any> {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
  }
    //  obserable = Observable.create(resp=>{
    //    resp.next(this.dummyload())
    //  })
}
