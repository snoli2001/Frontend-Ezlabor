import { Component, OnInit } from '@angular/core';
import {FreelancerPostulationInterface} from "../../models/FreelancerPostulation.interface";
import {FreelancerPostulationApiService} from "../../services/freelancer-postulation-api.service";



@Component({
  selector: 'app-postulations',
  templateUrl: './postulations.component.html',
  styleUrls: ['./postulations.component.css']
})


export class PostulationsComponent implements OnInit {


  displayedColumns: string[] = [ 'title','description',  'payment', 'desired', 'state'];


  postulations: FreelancerPostulationInterface[] = [];



  constructor(private freelancerPostulationService: FreelancerPostulationApiService ) {


    this.freelancerPostulationService.getFreelancerPostulationsById(1).subscribe( (postulationsResponse: FreelancerPostulationInterface[]  | any ) =>{

      this.postulations = postulationsResponse;

    });

  }




  ngOnInit(): void {
  }



}
