import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Bike } from "../Products/bikes/bikes.component";

@Injectable(
    {
        providedIn : 'root'
    }
)
export class ProductService{
    constructor(private httpClient : HttpClient){}
    GetBikes(): Observable<Bike[]>{
            
        return this.httpClient.get<Bike[]>("api/bikes.json").pipe(
            tap(data=>console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse)
    {

        if(err.error instanceof ErrorEvent)
        {

            console.error(err);
        }

        return throwError(err)
    }
}