import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OfferInterface } from '../../modals/offer.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-postulation-card',
  templateUrl: './postulation-card.component.html',
  styleUrls: ['./postulation-card.component.css']
})
export class PostulationCardComponent implements OnInit {

  @Input()
  offer!: OfferInterface;
  @Output() postulate = new EventEmitter<undefined>();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPostulate(): void {
    this.postulate.emit(undefined);
  }

  applyOffer() {
    this.router.navigate(["apply-postulations/",this.offer.id])
    console.log(this.offer.id)
  }

}
