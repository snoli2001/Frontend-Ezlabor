import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { PostulationInterface } from '../models/postulation.interface'

@Injectable({
  providedIn: 'root'
})
export class PostulationsApiService {

  private apiUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  public getAllPostulationsByOfferId(id: number): Observable<any> {
    const url = `${this.apiUrl}/offers/${id}/postulations`;
    return this.http.get<any>(url);
  }
}
