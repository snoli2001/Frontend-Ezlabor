import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import {FreelancerInterface} from "../../models/Frelancer.interface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancer-card',
  templateUrl: './freelancer-card.component.html',
  styleUrls: ['./freelancer-card.component.css']
})
export class FreelancerCardComponent implements OnInit {

  @Input()
  freelancer!: FreelancerInterface;
  @Output() freelancerProfile = new EventEmitter<undefined>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFreelancerProfile(): void{
    this.freelancerProfile.emit(undefined);
  }
  seeMore(): void{
    this.router.navigate(["freelancer/",this.freelancer.id])
  }

}
