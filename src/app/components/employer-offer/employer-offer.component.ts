import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OfferInterface } from '../../models/offer.interface';

@Component({
  selector: 'app-employer-offer',
  templateUrl: './employer-offer.component.html',
  styleUrls: ['./employer-offer.component.css']
})
export class EmployerOfferComponent implements OnInit {

  @Input()
  offer!: OfferInterface;
  @Output() postulate = new EventEmitter<undefined>();



  constructor(private router: Router) { }

  ngOnInit(): void {
    this.postulate.emit(undefined);
  }

  viewPostulations(){
    this.router.navigate(["offer-postulations/",this.offer.id])
  }

}
