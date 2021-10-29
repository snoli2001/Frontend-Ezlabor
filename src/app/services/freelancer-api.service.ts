import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreelancerInterface } from '../models/Frelancer.interface';
import { NewFreelancerInterface } from '../models/NewFreelancer';
import { Skill } from '../templates/profile/profile.component';
import { UpdateFreelancerInterface } from '../models/UpdateFreelancer.interface';
import { PostulationInterface } from '../models/Postulation.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FreelancerApiService {

  // private apiUrl:string = "http://localhost:8080/api"
  // private apiUrl:string = "https://ezlabor-api.herokuapp.com/api"

  constructor(private http: HttpClient) { }

  getAllFreelancers(): Observable<FreelancerInterface[]>{
    const url = `${environment.apiURL}/freelancers`;
    return this.http.get<FreelancerInterface[]>(url);
  }
  
  getFreelancerById(id: number): Observable<FreelancerInterface>{
    const url = `${environment.apiURL}/freelancers/${id}`;
    return this.http.get<FreelancerInterface>(url);
  }

  createFreelancer(newFreelancer: NewFreelancerInterface){
    const url = `${environment.apiURL}/freelancers`;
    return this.http.post(url, newFreelancer );
  }

  getSkills(id: number): Observable<Skill[]>{
    const url = `${environment.apiURL}/freelancers/${id}/skills`;
    return this.http.get<Skill[]>(url);
  }

  updateFreelancer(id: number, updateData: UpdateFreelancerInterface ): Observable<FreelancerInterface>{
    const url = `${environment.apiURL}/freelancers/${id}`;
    return this.http.put<FreelancerInterface>(url, updateData );
  }

  getPostulationsById(id: number) : Observable<PostulationInterface[]>{
    const url = `${environment.apiURL}/freelancers/${id}/postulations`;
    return this.http.get<PostulationInterface[]>(url);
  }

}
