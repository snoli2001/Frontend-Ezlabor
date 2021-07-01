import { Component, OnInit } from '@angular/core';
import {PostulationsApiService} from "../../services/postulations-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-offer-postulations',
  templateUrl: './offer-postulations.component.html',
  styleUrls: ['./offer-postulations.component.css']
})
export class OfferPostulationsComponent implements OnInit {

  offerId: number = 0;
  postulations: any;
  constructor(private postulationApiService: PostulationsApiService, private router: ActivatedRoute) {
    this.router.params.subscribe(resp=>{
      if(resp['id']){
        this.offerId= resp['id'];
        this.postulationApiService.getAllPostulationsByOfferId(this.offerId).subscribe(resp=>this.postulations = resp);
      }
    })
  }

  ngOnInit(): void {
  }

}
