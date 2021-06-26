import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

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

  getUserId(): number | undefined{
    const token = sessionStorage.getItem('token');
    if(token != null){
      const decoded:any = jwt_decode(token);
      const id = decoded.sub as number;
      return id;
    }
    return
  }

}
