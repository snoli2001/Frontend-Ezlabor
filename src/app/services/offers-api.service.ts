import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private apiUrl:string = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  getOffers(){
    let url = `${ this.apiUrl }/offers`;
    return this.http.get(url);
  }

  getOffersBySpecialties(){
    let url = `${ this.apiUrl }/offers/specialties`;
  }

  getOfferById(id: number) : Observable<any> {
    let url = `${ this.apiUrl }/offers/${ id }`;
    return this.http.get<any>(url);
  }
}
