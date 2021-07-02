import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreelancerInterface } from '../models/Frelancer.interface';
import { NewFreelancerInterface } from '../models/NewFreelancer';

@Injectable({
  providedIn: 'root'
})
export class FreelancerApiService {

  private apiUrl:string = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  getAllFreelancers(): Observable<FreelancerInterface>{
    const url = `${this.apiUrl}/freelancers`;
    return this.http.get<FreelancerInterface>(url);
  }

  getFreelancerById(id: number): Observable<FreelancerInterface>{
    const url = `${this.apiUrl}/freelancers/${id}`;
    return this.http.get<FreelancerInterface>(url);
  }

  createFreelancer(newFreelancer: NewFreelancerInterface){
    const url = `${this.apiUrl}/freelancers`;
    return this.http.post(url, newFreelancer );
  }

}
