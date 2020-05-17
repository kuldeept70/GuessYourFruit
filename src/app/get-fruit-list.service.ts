import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GetFruitListService {
  fruitlist$;
  constructor(private http:HttpClient) { }
  getList():Observable<any>{
    console.log("Inside Get Fruit Service");
    return this.http.get<any>('./assets/fruitWithIndex.json').pipe(
      tap(data=>console.error("data obtained"+JSON.stringify(data))),
      catchError(err=>{
        console.error("Error is "+err);
        return of(null);
      })
    )
  }
}
