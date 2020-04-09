import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError,tap} from "rxjs/operators"

@Injectable({providedIn:'root'})
export class ProductService
{
  private productUrl = 'api/products/products.json';

  constructor(private http:HttpClient)
  {

  }
    getProducts():Observable<IProduct[]>
    {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=> console.log('All: '+JSON.stringify(data))),
            catchError(this.handleError));
    }

    private handleError(err:HttpErrorResponse)
    {
      //In a reall world application, we may send the server to some remote logging infrastructure other than console
      let errorMessage='';
      if(err.error instanceof ErrorEvent)
      {
        //A client-side or network error occurred. Handle it accordingly
        errorMessage = `An error occurred: ${err.error.message}`;
      }else{
        //The back end returned an unsuccessful response code.
        //The response body contains details as to what went wrong
        errorMessage = `Server returned code: ${err.status},error message is ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}