import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import {FreelancerInterface} from "../../models/Frelancer.interface";

@Component({
  selector: 'app-freelancer-card',
  templateUrl: './freelancer-card.component.html',
  styleUrls: ['./freelancer-card.component.css']
})
export class FreelancerCardComponent implements OnInit {


  @Input()
  freelancer!: FreelancerInterface;
  @Output() freelancerProfile = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  onFreelancerProfile(): void{
    this.freelancerProfile.emit(undefined);
  }

}
