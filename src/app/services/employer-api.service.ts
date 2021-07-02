import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewEmployerInterface} from "../models/NewEmployer";
import {EmployerInterface} from "../models/Employer.interface";



@Injectable({
  providedIn: 'root'
})
export class EmployerApiService {

  private apiUrl: string = "http://localhost:8080/api"

  constructor(private http: HttpClient) {
  }
  getEmployerById(id: number): Observable<EmployerInterface>{
    const url = `${this.apiUrl}/employers/${id}`;
    return this.http.get<EmployerInterface>(url);
  }
  createEmployer(newEmployer: NewEmployerInterface){
    const url = `${this.apiUrl}/employers`;
    return this.http.post(url, newEmployer );
  }
}
