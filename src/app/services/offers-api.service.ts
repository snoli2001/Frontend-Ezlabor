import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getOfferById(offerId: number) {
    let url = `${this.apiUrl}/offers/${offerId}`;
    return this.http.get(url);
  }

}
