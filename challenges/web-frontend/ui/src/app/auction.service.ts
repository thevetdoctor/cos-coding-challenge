import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Auction } from './types/auction';
import { baseUrl } from './utils';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  baseUrl:string = baseUrl;

  handleError(error: HttpErrorResponse):any{
    console.error(error.message);
    return error.message;
    }
    
  constructor(private http:HttpClient) { }

  getAuctions(auctionsUrl:string, httpOptions: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/v2/${auctionsUrl}`, { headers: httpOptions })
                    .pipe(catchError(this.handleError));

  }
}
