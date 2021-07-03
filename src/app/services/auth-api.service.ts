import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../models/Login.interface';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private apiUrl:string = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  errorMsg: string | undefined;


  login(loginForm: LoginInterface){
    let url = `${ this.apiUrl }/login/`;
    return this.http.patch<any>(`${url}`, loginForm)
    .pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              this.errorMsg = `Error: ${error.error.message}`;
          } else {
              this.errorMsg = `Error: ${error.message}`;
          }
          return of([]);
      })
  );
  }

}