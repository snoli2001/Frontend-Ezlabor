import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../services/auth-api.service';
import { LoginInterface } from '../../modals/Login.interface';

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

  loginForm: LoginInterface = {
    email: "sebastian.noli@gmail.com",
    password: "123456"
  }

  constructor(private authService: AuthApiService) { }

  ngOnInit(): void {
    this.authService.login(this.loginForm)
    .subscribe( resp => console.log(resp.token) );
  }

}
