import { Component,Input, OnInit } from '@angular/core';
import {OfferInterface} from "../../models/offer.interface";
import {OffersService} from "../../services/offers-api.service";
import {SpecialtiesService} from "../../services/specialties-api.service";
import {SpecialtyInterface} from "../../models/specialty.interface";
import {PostulationInterface} from "../../models/postulation.interface";

@Component({
  selector: 'app-freelancer-postulations',
  templateUrl: './freelancer-postulations.component.html',
  styleUrls: ['./freelancer-postulations.component.css']
})
export class FreelancerPostulationsComponent implements OnInit {

  offers: OfferInterface[] = [];
  offersFiltered: OfferInterface[] = [];
  specialties: any[] = [];
  search: string = '';
  postulations: PostulationInterface[] = [];

  constructor(private offersService: OffersService, private specialtiesService: SpecialtiesService) {
    this.offersService.getOffers().subscribe((offersResponse: OfferInterface[] | any) => {
      this.offers = offersResponse;
      this.offersFiltered = this.offers;
    });

    this.specialtiesService.getSpecialties().subscribe((specialtiesResponse: SpecialtyInterface[] | any) => {
      this.specialties = specialtiesResponse;
      this.specialties.map(sp => sp.selected = false);
    })
  }

  ngOnInit(): void {
  }

  cleanFilters(): void {
    this.specialties.forEach(specialty => specialty.selected = false);
    this.filterOffers();
  }

  searchOffer(): void {
    if (this.search != '') {
      this.offersFiltered = this.offersFiltered.filter(offer => {
        return offer.title.toLowerCase().match(this.search.toLowerCase());
      })
    } else if (this.search == '') {
      this.filterOffers();
    }

  }

  filterOffers(): void {
    let specialtiesIds = this.specialties.filter(specialty => specialty.selected == true).map(specialty => specialty.id);
    if (specialtiesIds.length > 0) {
      this.offersFiltered = this.offers.filter(offer => specialtiesIds.includes(offer.specialty.id));
    } else {
      this.offersFiltered = this.offers;
    }
  }


}
