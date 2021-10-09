import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable, throwError } from 'rxjs'; 
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Certificate } from '../models/certificate';

@Injectable({
    providedIn: 'root'
})  

export class CertificateService {  
    constructor(private http: HttpClient) {} 
    // endPoint = 'https://moecsrep-certificate-microservice.azurewebsites.net';
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

    getCertificateDetails(id: number): Observable<Certificate[]> {  
      return this.http.get<Certificate[]>('/certificate-service/certificate/' + id.toString())
      .pipe(
          retry(1),
          catchError(this.processError)
        )
    } 
}  