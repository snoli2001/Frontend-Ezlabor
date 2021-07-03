import { Component, OnInit } from '@angular/core';
import { EmployerInterface } from '../../models/Employer.interface';
import { UserApiService } from '../../services/user-api.service';
import { EmployerApiService } from '../../services/employer-api.service';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {

  id: number;
  employer: EmployerInterface | undefined;

  constructor(private userService: UserApiService,
              private employerService: EmployerApiService,
              ) {
    
    this.id = this.userService.getUserId() as number;
    this.employerService.getEmployerById(this.id)
      .subscribe( response => this.employer = response );
   }
  
  ngOnInit(): void {
  }
}
