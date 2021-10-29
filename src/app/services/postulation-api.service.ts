import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostulationInterface} from "../models/Postulation.interface";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostulationApiService {

  // private apiUrl: string = "http://localhost:8080/api";
  // private apiUrl:string = "https://ezlabor-api.herokuapp.com/api"


  constructor(private http: HttpClient) { }

  postPostulation(freelancerId: number, offerId: number, newPostulation: PostulationInterface) {
    const url = `${environment.apiURL}/freelancers/${freelancerId}/offers/${offerId}/postulations`;
    return this.http.post(url, newPostulation);
  }
}
