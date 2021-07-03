import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { UserApiService } from '../../services/user-api.service';

export interface Skill {
  id: 1,
  name: string,
  description: string,
  level: string,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  userType: string | undefined;


  constructor(private router: Router, private app: AppComponent,
    private userService:UserApiService) {
    
    this.id = this.userService.getUserId() as number;
   

  }

  ngOnInit(): void {
    this.userService.getUserType(this.id)
    .subscribe((resp: any) => this.userType = resp.accountType)
  }
}
