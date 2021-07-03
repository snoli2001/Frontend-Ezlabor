import { Component, OnInit } from '@angular/core';
import { PostulationInterface } from '../../models/Postulation.interface';
import { FreelancerApiService } from '../../services/freelancer-api.service';
import { UserApiService } from '../../services/user-api.service';



@Component({
  selector: 'app-postulations',
  templateUrl: './postulations.component.html',
  styleUrls: ['./postulations.component.css']
})


export class PostulationsComponent implements OnInit {


  displayedColumns: string[] = [ 'title','description',  'payment', 'desired', 'state'];

  id: number;
  postulations: PostulationInterface[] = [];



  constructor(private freelancerService: FreelancerApiService, private userService: UserApiService ) {
    
    this.id = userService.getUserId() as number;

    this.freelancerService.getPostulationsById(this.id).subscribe( 
      (postulationsResponse: PostulationInterface[]  | any ) =>{
      this.postulations = postulationsResponse;
    });

  }




  ngOnInit(): void {
  }



}
