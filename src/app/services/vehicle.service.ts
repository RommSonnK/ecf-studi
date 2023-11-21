import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Vehicle} from "../models/vehicle";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private URI = "http://localhost:8080/vehicules";
  httpHeader = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getVehicleList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.URI)
      .pipe(
        tap(Vehicle => console.log('Vehicles Fetched!')),
        catchError(this.handleError<Vehicle[]>('Error when Get vehicles: ', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
