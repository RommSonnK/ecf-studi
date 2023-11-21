import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, of, tap} from "rxjs";
import {Comment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private URI = "http://localhost:8080/commentaires";
  httpHeader = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getCommentList(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.URI, this.httpHeader)
      .pipe(
        tap(Comment => console.log('Comments Fetched!')),
        catchError(this.handleError<Comment[]>('Error when Get comments: ', []))
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
