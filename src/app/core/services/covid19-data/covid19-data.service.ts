import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiMethodName } from 'src/app/infrastructure/enums/api-method-name.enum';
import { Observable, of, throwError} from 'rxjs';
import { catchError, map  } from 'rxjs/operators';
import { IStateDetails } from 'src/app/infrastructure/interfaces/istate-details';
import { mapper } from 'src/app/infrastructure/DTO/Mapper';
import { IDistrictDetails } from 'src/app/infrastructure/interfaces/idistrict-details';


@Injectable({
  providedIn: 'root'
})
export class Covid19DataService {

  constructor(private httpClient: HttpClient) { }

  getStateData(): Observable<IStateDetails[]> {
    return this.httpClient.get<any>(ApiMethodName.getStateWiseData).
    pipe(map( response => {
    let map = new mapper();
    return map.mapDTO(response.statewise);
    }));
     
  }

  async getDistrictData() {
    return await this.httpClient.get<IDistrictDetails[]>(ApiMethodName.getDistricteWiseData).toPromise();     
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
