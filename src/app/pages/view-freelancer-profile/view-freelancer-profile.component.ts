import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreelancerApiService } from '../../services/freelancer-api.service';
import { FreelancerInterface } from '../../models/Frelancer.interface';
import { Skill } from '../freelancer-profile/freelancer-profile.component';

@Component({
  selector: 'app-view-freelancer-profile',
  templateUrl: './view-freelancer-profile.component.html',
  styleUrls: ['./view-freelancer-profile.component.css']
})
export class ViewFreelancerProfileComponent implements OnInit {

  id: number | undefined;
  skills: Skill[] = [];

  freelancer: FreelancerInterface | undefined

  constructor(private actRoute: ActivatedRoute,
     private freelancerService: FreelancerApiService) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params.id;
    if(this.id != undefined){
      this.freelancerService.getFreelancerById(this.id).subscribe(resp => this.freelancer = resp)
      this.freelancerService.getSkills(this.id)
      .subscribe( response => this.skills = response);
    }
  }

}
