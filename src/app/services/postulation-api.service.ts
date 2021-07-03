import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostulationInterface} from "../modals/postulation.interface";

@Injectable({
  providedIn: 'root'
})
export class PostulationApiService {

  private apiUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  postPostulation(freelancerId: number, offerId: number, newPostulation: PostulationInterface) {
    const url = `${this.apiUrl}/freelancers/${freelancerId}/offers/${offerId}/postulations`;
    return this.http.post(url, newPostulation);
  }
}