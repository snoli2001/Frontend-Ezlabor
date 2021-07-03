import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewEmployerInterface} from "../models/NewEmployer";
import {EmployerInterface} from "../models/Employer.interface";
import { OfferInterface } from '../models/offer.interface';



@Injectable({
  providedIn: 'root'
})
export class EmployerApiService {

  // private apiUrl: string = "http://localhost:8080/api"
  private apiUrl:string = "https://ezlabor-api.herokuapp.com/api"

  constructor(private http: HttpClient) {
  }
  getEmployerById(id: number): Observable<EmployerInterface>{
    const url = `${this.apiUrl}/employers/${id}/`;
    return this.http.get<EmployerInterface>(url);
  }
  createEmployer(newEmployer: NewEmployerInterface){
    const url = `${this.apiUrl}/employers`;
    return this.http.post(url, newEmployer );
  }
  
  getOffersById(id: number): Observable<OfferInterface[]>{
    const url = `${this.apiUrl}/employers/${id}/offers`;
    return this.http.get<OfferInterface[]>(url);
  }

  createOffer(id: number, newOffer: any ){
    const url = `${this.apiUrl}/employers/${id}/offers`;
    return this.http.post(url, newOffer); 
  }

}
