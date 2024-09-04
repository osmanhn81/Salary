
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable, input } from '@angular/core';
import { Data } from '@angular/router';
import { catchError, Observable} from 'rxjs'
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';





@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private urlApi = 'http://10.0.0.2:7010/api/jobs';
    private urlApiWwHD = 'http://10.0.0.2:7010/api/WeekWorkedHoursDetails';
    private urlApiPay = 'http://10.0.0.2:7010/api/PayInHoursDate';


  constructor(private http: HttpClient) { }

      public getData(): Observable<any> {
            return this.http.get<any>(this.urlApi);
    }
      public getDataDetails(): Observable<any>{
            return this.http.get<any>(this.urlApiWwHD);
      }
      public insertPayDate( inputData: any) : Observable<any>{

            return this.http.post<any>(this.urlApiPay, inputData).pipe(
              catchError(error => {
                console.error('An error occurred:', error);
                throw error;
              }));
      }
}
