import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable, throwError } from 'rxjs'; 
import { retry, catchError } from 'rxjs/operators';
import { DecisionTree } from '../models/decisionTree';

@Injectable({
    providedIn: 'root'
})  

export class AdminService {  
    constructor(private http: HttpClient) {} 
    httpHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      
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

     getQuestionnaireTree(): Observable<DecisionTree> {  
      return this.http.get<DecisionTree>('https://app-more-featureflag-poc.azurewebsites.net/Questionnaire/getdecisiontree')
      .pipe(
          retry(1),
          catchError(this.processError)
        )
    } 
}  