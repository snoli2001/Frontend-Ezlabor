import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostulationInterface } from '../../models/Postulation.interface';
import { OffersService } from '../../services/offers-api.service';

@Component({
  selector: 'app-offer-postulations',
  templateUrl: './offer-postulations.component.html',
  styleUrls: ['./offer-postulations.component.css']
})
export class OfferPostulationsComponent implements OnInit {
  
  displayedColumns: string[] = [ 'freelancer','description',  'payment', 'desired', 'state', 'actions'];


  offerId!: number;
  postulations!: Array<PostulationInterface>;

  constructor(private acRoute: ActivatedRoute, private offerService: OffersService) {
      this.offerId = this.acRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if(this.offerId)
      this.offerService.getPostulationsById(this.offerId)
      .subscribe(resp => this.postulations = resp);
  }

  acceptPostulation(id: number){
    this.offerService.acceptPostulation(this.offerId,id)
    .subscribe( () => {
      this.offerService.getPostulationsById(this.offerId)
      .subscribe(resp => this.postulations = resp);
    })
  }

  rejectPostulation(id: number){
    this.offerService.rejectPostulation(this.offerId,id)
    .subscribe( () => {
      this.offerService.getPostulationsById(this.offerId)
      .subscribe(resp => this.postulations = resp);
    })
  }

  clearPostulation(id: number){
    this.offerService.deletePostulation(this.offerId,id)
    .subscribe( () => {
      this.offerService.getPostulationsById(this.offerId)
      .subscribe(resp => this.postulations = resp);
    })
  }



}
