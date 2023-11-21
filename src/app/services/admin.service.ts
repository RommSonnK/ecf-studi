import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Admin} from "../models/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private URI = "http://localhost:8080/admins";
  httpHeader = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAdminList(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.URI, this.httpHeader)
      .pipe(
        tap(Admin => console.log('Admins Fetched!')),
        catchError(this.handleError<Admin[]>('Error when Get admins: ', []))
      );
  }

  addAdmin(id: number, mail: string, mdp: string): Observable<Admin> {
    this.http.post<Admin>(this.URI, {id: id, mail: mail, mdp: mdp}, this.httpHeader).subscribe((data) => {
      console.log(data)
    });
    return new Observable<Admin>();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
