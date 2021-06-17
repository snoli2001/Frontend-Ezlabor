import { Component, Input, OnInit } from '@angular/core';
import { OfferInterface } from 'src/app/modals/Offer.interface';
import { SpecialtyInterface } from 'src/app/modals/specialty.interface';
import { OffersService } from '../../services/offers.service';
import { SpecialtiesService } from '../../services/specialties.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  offers: OfferInterface[] = [];
  offersFiltered: OfferInterface[] = [];
  specialties: any[] =[];
  search: string = '';

  constructor(private offersService: OffersService,
              private specialtiesService: SpecialtiesService) {
    
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

  cleanFilters(): void{
    this.specialties.forEach(specialty => specialty.selected = false );
    this.filterOffers();
  }

  searchOffer(): void {
    if(this.search != ''){
      this.offersFiltered = this.offersFiltered.filter( offer => {
        return offer.title.toLowerCase().match(this.search.toLowerCase());
      })
    } else if(this.search == '') {
      this.filterOffers();
    }
  
  }

  filterOffers(): void{
    let specialtiesIds = this.specialties.filter(specialty => specialty.selected == true).map(specialty => specialty.id);
    if(specialtiesIds.length > 0)
    {
      this.offersFiltered = this.offers.filter(offer => specialtiesIds.includes(offer.specialty.id));
    }
    else {
      this.offersFiltered = this.offers;
    }
  }

}
