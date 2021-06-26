import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../services/auth-api.service';
import { LoginInterface } from '../../models/Login.interface';
import { UserApiService } from '../../services/user-api.service';
import { FreelancerInterface } from '../../models/Frelancer.interface';
import { FreelancerApiService } from '../../services/freelancer-api.service';

export interface Skill {
  name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  skills: Skill[] = [
    {name: 'Figma'},
    {name: 'JavaScript'},
    {name: 'MySQL'},
    {name: 'HTML5'},
    {name: 'CSS3'},
    {name: 'Angular'},
  ];

  id: number;
  freelancer: FreelancerInterface | undefined;

  constructor(private userService: UserApiService, private freelancerService: FreelancerApiService) {
    
    this.id = this.userService.getUserId() as number;
    this.freelancerService.getFreelancerById(this.id)
      .subscribe( response => this.freelancer = response );
   }
  
  ngOnInit(): void {
    
  }

}
