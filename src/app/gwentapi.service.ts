import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GwentapiService {
  gwentApiUrl: string = "https://api.gwentapi.com/v0";

  constructor(private http: HttpClient) {}

  getCards(){
    const url = this.gwentApiUrl + "/cards";

    return this.http.get(url)
    .pipe( 
      catchError(this.handleError('getCards', []))
    );
  }

  getOneCard(cardId){
    const url = this.gwentApiUrl + "/cards/" + cardId;
    return this.http.get(url)
    .pipe( 
      catchError(this.handleError('getOneCard', []))
    );

  }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
