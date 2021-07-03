import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreelancerInterface } from '../models/Frelancer.interface';
import { NewFreelancerInterface } from '../models/NewFreelancer';
import { Skill } from '../pages/profile/profile.component';
import { UpdateFreelancerInterface } from '../models/UpdateFreelancer.interface';
import { PostulationInterface } from '../models/Postulation.interface';

@Injectable({
  providedIn: 'root'
})
export class FreelancerApiService {

  private apiUrl:string = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }
  
  getFreelancerById(id: number): Observable<FreelancerInterface>{
    const url = `${this.apiUrl}/freelancers/${id}`;
    return this.http.get<FreelancerInterface>(url);
  }

  createFreelancer(newFreelancer: NewFreelancerInterface){
    const url = `${this.apiUrl}/freelancers`;
    return this.http.post(url, newFreelancer );
  }

  getSkills(id: number): Observable<Skill[]>{
    const url = `${this.apiUrl}/freelancers/${id}/skills`;
    return this.http.get<Skill[]>(url);
  }

  updateFreelancer(id: number, updateData: UpdateFreelancerInterface ): Observable<FreelancerInterface>{
    const url = `${this.apiUrl}/freelancers/${id}`;
    return this.http.put<FreelancerInterface>(url, updateData );
  }

  getPostulationsById(id: number) : Observable<PostulationInterface[]>{
    const url = `${this.apiUrl}/freelancers/${id}/postulations`;
    return this.http.get<PostulationInterface[]>(url);
  }

}
