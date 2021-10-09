import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable, throwError } from 'rxjs'; 
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Educator } from '../models/educator';
import { Education } from '../models/education';

@Injectable({
    providedIn: 'root'
})  

export class EducatorService {  
    constructor(private http: HttpClient) {}
    // endPoint = 'http://localhost:38473';
    //endPoint = 'https://moecsrep-api-gateway.azurewebsites.net';
    // httpHeader = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //     })
    //   }

      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Access-Control-Allow-Origin": "*",
          
        } ),responseType: 'text' as 'json'
      };

    processError(err: any) {
        let message = '';
        if(err.error instanceof ErrorEvent) {
         message = err.error.message;
        } else {
         message = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        console.log(message);
        return throwError(message);
     }

    getEducators(): Observable<Educator[]> {  
        return this.http.get<Educator[]>('/educator-service/educator')
        .pipe(
            retry(1),
            catchError(this.processError)
          )
    }  
    
    getEducatorDetails(id: number): Observable<Educator> {  
      return this.http.get<Educator>('/educator-service/educator/' + id.toString())
      .pipe(
          retry(1),
          catchError(this.processError)
        )
    }  

    getEducattionDetails(id: number): Observable<Education[]> {  
      return this.http.get<Education[]>('/educator-service/education/' + id.toString())
      .pipe(
          retry(1),
          catchError(this.processError)
        )
    } 
}  