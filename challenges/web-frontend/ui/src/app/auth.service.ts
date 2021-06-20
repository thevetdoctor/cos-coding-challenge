import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = 'https://api-core-dev.caronsale.de/api/v1'
  
  handleError(error: HttpErrorResponse){
    console.log(error.message);
    return error.message;
    }

    constructor(private http:HttpClient) { }

    login(urlString:string, loginDetails: any):Observable<any> {

      return this.http.put(`${this.baseUrl}/${urlString}/${loginDetails.email}`, loginDetails, httpOptions)
                      .pipe(catchError(this.handleError));
    }
}
