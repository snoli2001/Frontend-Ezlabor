import {Component, Input, OnInit} from '@angular/core';
import {OfferInterface} from "../../models/offer.interface";

@Component({
  selector: 'app-apply-postulations',
  templateUrl: './apply-postulations.component.html',
  styleUrls: ['./apply-postulations.component.css']
})
export class ApplyPostulationsComponent implements OnInit {

  @Input()
  offer!: OfferInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
