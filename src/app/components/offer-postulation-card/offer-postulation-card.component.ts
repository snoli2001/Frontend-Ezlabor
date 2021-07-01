import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OfferInterface} from "../../models/offer.interface";
import {Router} from "@angular/router";


@Component({
  selector: 'app-offer-postulation-card',
  templateUrl: './offer-postulation-card.component.html',
  styleUrls: ['./offer-postulation-card.component.css']
})
export class OfferPostulationCardComponent implements OnInit {

  @Input()
  offer!: OfferInterface;
  @Output() postulate = new EventEmitter<undefined>();

  offers: any;
  postulations: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  viewPostulations(){
    this.router.navigate(["offerPostulations/",this.offer.id])
    console.log(this.offer.id)
  }
}
