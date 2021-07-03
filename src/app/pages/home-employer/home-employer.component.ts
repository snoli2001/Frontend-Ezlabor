import { Component, OnInit } from '@angular/core';
import { FreelancerApiService } from '../../services/freelancer-api.service';
import { FreelancerInterface } from '../../models/Frelancer.interface';

@Component({
  selector: 'app-home-employer',
  templateUrl: './home-employer.component.html',
  styleUrls: ['./home-employer.component.css']
})
export class HomeEmployerComponent implements OnInit {

  freelancers: Array<FreelancerInterface> | undefined;
  constructor(private freelancerService: FreelancerApiService) { }

  ngOnInit(): void {
    this.freelancerService.getAllFreelancers()
    .subscribe(resp => {this.freelancers = resp; console.log(this.freelancers); });
   
  }

}
