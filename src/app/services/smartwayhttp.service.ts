import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmartwayhttpService {

  constructor( private http: HttpClient ) {

  }

  private url = "https://backend.smartwaypanel.com/api/tracking/historical_data/?vehicles=262&datetime_from=2018-11-05T18:00&datetime_to=2018-11-06T19:00";

  public getData$(): Observable<any>{
    return this.http.get( this.url )
  }


}
