import {Component, Input, OnInit} from '@angular/core';
import {OfferInterface} from '../../modals/offer.interface';
import {ActivatedRoute} from "@angular/router";
import {OffersService} from "../../services/offers-api.service";

@Component({
  selector: 'app-apply-postulations',
  templateUrl: './apply-postulations.component.html',
  styleUrls: ['./apply-postulations.component.css']
})
export class ApplyPostulationsComponent implements OnInit {

  @Input()
  offer!: OfferInterface;

  offerId: number = 0;
  offers: any;

  constructor(private offerApiService: OffersService, private router: ActivatedRoute) {
    this.router.params.subscribe(resp => {
      if(resp['id']) {
        this.offerId = resp['id'];
        this.offerApiService.getOfferById(this.offerId).subscribe(resp => this.offers = resp);
      }
    })
  }


  ngOnInit(): void {
  }

}
