import { Component, OnInit } from '@angular/core';
import {FreelancerInterface} from "../../models/Frelancer.interface";
import { SpecialtiesService } from '../../services/specialties-api.service';
import {FreelancerApiService} from "../../services/freelancer-api.service";
import {SpecialtyInterface} from "../../models/specialty.interface";

@Component({
  selector: 'app-employer-freelancers',
  templateUrl: './employer-freelancers.component.html',
  styleUrls: ['./employer-freelancers.component.css']
})
export class EmployerFreelancersComponent implements OnInit {

  freelancers: FreelancerInterface[] = [];
  freelancersFiltered: FreelancerInterface[] = [];
  specialties: any[] = [];
  search: string = '';
  constructor(private freelancersService: FreelancerApiService,
              private specialtiesService: SpecialtiesService) {

    this.freelancersService.getAllFreelancers().subscribe((freelancersResponse: FreelancerInterface[] | any) => {
      this.freelancers = freelancersResponse;
      this.freelancersFiltered = this.freelancers;
    });

    this.specialtiesService.getSpecialties().subscribe((specialtiesResponse: SpecialtyInterface[] | any) => {
      this.specialties = specialtiesResponse;
      this.specialties.map(sp => sp.selected = false);
    })

  }


  ngOnInit(): void {
  }

  cleanFilters(): void{
    this.specialties.forEach(specialty => specialty.selected = false );
    this.filterFreelancers();
  }

  searchFreelancer() : void{
    if(this.search != ''){
      this.freelancersFiltered = this.freelancersFiltered.filter(freelancer => {
        return freelancer.username.toLowerCase().match(this.search.toLowerCase());
      })
    } else if(this.search == ''){
      this.filterFreelancers();
    }
  }



  filterFreelancers(): void{
    let specialtiesIds = this.specialties.filter(specialty => specialty.selected == true).map(specialty => specialty.id);
    if(specialtiesIds.length > 0)
    {
      this.freelancersFiltered = this.freelancers.filter(freelancer => specialtiesIds.includes(freelancer.specialty.id));
    }
    else {
      this.freelancersFiltered = this.freelancers;
    }
  }
}
