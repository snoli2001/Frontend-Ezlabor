import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserApiService} from "./user-api.service";

@Injectable({
  providedIn: 'root'
})
export class SkillApiService {

  // private apiUrl: string = "http://localhost:8080/api"
  private apiUrl:string = "https://ezlabor-api.herokuapp.com/api"

  constructor(private http: HttpClient) { }

  addSkill(freelancerId: number, skillName: string) {
    console.log(freelancerId, skillName)
    let url = `${this.apiUrl}/freelancers/${freelancerId}/skills`;
    return this.http.post(url, {
      name: skillName,
      description: "description",
      level: "BASIC"
    })
  }

}