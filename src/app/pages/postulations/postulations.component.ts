import {Component, Input, OnInit} from '@angular/core';
import {OfferInterface} from "../../models/offer.interface";

@Component({
  selector: 'app-postulations',
  templateUrl: './postulations.component.html',
  styleUrls: ['./postulations.component.css']
})
export class PostulationsComponent implements OnInit {

  @Input()
  offer!: OfferInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
