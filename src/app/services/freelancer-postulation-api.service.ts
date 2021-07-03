import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FreelancerPostulationInterface} from "../models/FreelancerPostulation.interface";
import {NewPostulationInterface} from "../models/NewPostulation.interface";



@Injectable({
  providedIn: 'root'
})
export class FreelancerPostulationApiService{

  private apiUrl:string = "http://localhost:8080/api"
  constructor(private http: HttpClient) {}


  getFreelancerPostulationsById(id:number ):Observable<FreelancerPostulationInterface>{
    const url = `${this.apiUrl}/freelancers/${id}/postulations`;
    return this.http.get<FreelancerPostulationInterface>(url);
  }

  createFreelancerPostulation(freelancerId:number,offerId:number,  newFreelancerPostulation: NewPostulationInterface){
    const url = `${this.apiUrl}/freelancers/${freelancerId}/offers/${offerId}/postulations`;

    return this.http.post(url, newFreelancerPostulation);
  }


}
