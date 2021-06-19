import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OfferInterface } from '../../modals/offer.interface';

@Component({
  selector: 'app-postulation-card',
  templateUrl: './postulation-card.component.html',
  styleUrls: ['./postulation-card.component.css']
})
export class PostulationCardComponent implements OnInit {

  @Input()
  offer!: OfferInterface;
  @Output() postulate = new EventEmitter<undefined>();


  constructor() { }

  ngOnInit(): void {
  }

  onPostulate(): void {
    this.postulate.emit(undefined);
  }

}
