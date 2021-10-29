import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  // private apiUrl:string = "http://localhost:8080/api"
  // private apiUrl:string = "https://ezlabor-api.herokuapp.com/api"
  
  constructor(private http: HttpClient) { }

  getSpecialties(){
    let url = `${ environment.apiURL }/specialties`;
    return this.http.get(url);
  }

}