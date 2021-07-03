import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostulationInterface } from '../models/Postulation.interface';
import { OfferInterface } from '../models/offer.interface';

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

  getOfferById(offerId: number) : Observable<OfferInterface> {
    let url = `${this.apiUrl}/offers/${offerId}`;
    return this.http.get<OfferInterface>(url);
  }

  getPostulationsById(offerId: number): Observable<PostulationInterface[]>{
    let url = `${this.apiUrl}/offers/${offerId}/postulations`;
    return this.http.get<PostulationInterface[]>(url);
  }

  acceptPostulation(offerId: number, postulationId: number){
    let url = `${this.apiUrl}/offers/${offerId}/postulations/${postulationId}/accept`;
    return this.http.patch(url, null);
  }

  rejectPostulation(offerId: number, postulationId: number){
    let url = `${this.apiUrl}/offers/${offerId}/postulations/${postulationId}/reject`;
    return this.http.patch(url, null);
  }

  deletePostulation(offerId: number, postulationId: number){
    let url = `${this.apiUrl}/offers/${offerId}/postulations/${postulationId}`;
    return this.http.delete(url);
  }

}
