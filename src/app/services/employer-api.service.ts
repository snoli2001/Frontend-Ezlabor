import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewEmployerInterface} from "../models/NewEmployer";
import {EmployerInterface} from "../models/Employer.interface";
import { OfferInterface } from '../models/offer.interface';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployerApiService {

  // private apiUrl: string = "http://localhost:8080/api"
  // private apiUrl:string = "https://ezlabor-api.herokuapp.com/api"

  constructor(private http: HttpClient) {
  }
  getEmployerById(id: number): Observable<EmployerInterface>{
    const url = `${environment.apiURL}/employers/${id}/`;
    return this.http.get<EmployerInterface>(url);
  }
  createEmployer(newEmployer: NewEmployerInterface){
    const url = `${environment.apiURL}/employers`;
    return this.http.post(url, newEmployer );
  }
  
  getOffersById(id: number): Observable<OfferInterface[]>{
    const url = `${environment.apiURL}/employers/${id}/offers`;
    return this.http.get<OfferInterface[]>(url);
  }

  createOffer(id: number, newOffer: any ){
    const url = `${environment.apiURL}/employers/${id}/offers`;
    return this.http.post(url, newOffer); 
  }

}
