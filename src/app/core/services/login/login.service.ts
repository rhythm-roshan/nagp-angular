import { Injectable } from '@angular/core';
import { IUser } from 'src/app/infrastructure/interfaces/iuser';
import { ApiMethodName } from 'src/app/infrastructure/enums/api-method-name.enum';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})

/** This is a Login service. */
export class LoginService {

 

  constructor(private httpClient: HttpClient) {
  
  }

  /** Method to get all login user data. */


  getLatestUser(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(ApiMethodName.getUserData).pipe(
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
