import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { baseUrl } from './utils';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = baseUrl;
  
  handleError(error: HttpErrorResponse){
    console.error(error.message);
    return error.message;
    }

    constructor(private http:HttpClient) { }

    login(urlString:string, loginDetails: any):Observable<any> {

      return this.http.put(`${this.baseUrl}/v1/${urlString}/${loginDetails.email}`, loginDetails, httpOptions)
                      .pipe(catchError(this.handleError));
    }
}
