import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private apiUrl:string = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  getUserType(id: number): any{
    let url = `${ this.apiUrl }/user/${id}`;
    return this.http.get(url);
  }

}
