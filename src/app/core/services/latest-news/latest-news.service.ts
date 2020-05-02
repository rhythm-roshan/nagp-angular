import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ApiMethodName } from 'src/app/infrastructure/enums/api-method-name.enum';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { ILatestNews } from 'src/app/infrastructure/interfaces/ilatest-news';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {

  constructor(private httpClient: HttpClient) { }

  getLatestNews(): Observable<ILatestNews[]> {
    return this.httpClient.get<ILatestNews[]>(ApiMethodName.getNewsData).pipe(
      catchError(this.handleError)
    );
  }

  addLatestNews(news:ILatestNews){
    return this.httpClient.post<ILatestNews>(ApiMethodName.getNewsData, news, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}


