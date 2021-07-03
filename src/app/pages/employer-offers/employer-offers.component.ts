import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OfferInterface } from '../../models/offer.interface';
import { EmployerApiService } from '../../services/employer-api.service';
import { UserApiService } from '../../services/user-api.service';
import { AddOfferComponent } from '../../components/dialogs/add-offer/add-offer.component';
import { SpecialtiesService } from '../../services/specialties-api.service';

@Component({
  selector: 'app-employer-offers',
  templateUrl: './employer-offers.component.html',
  styleUrls: ['./employer-offers.component.css']
})
export class EmployerOffersComponent implements OnInit {

  offers: Array<OfferInterface> | undefined;
  id!: number;
  specialties: any[] = [];

  constructor(private userService:UserApiService,
              private employerService:EmployerApiService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.userService.getUserId() as number;
    this.employerService.getOffersById(this.id)
      .subscribe(resp => this.offers = resp);

  }

  openPostOfferDialog(){
    const dialogRef = this.dialog.open(AddOfferComponent, {
      width: '500px',
    });

    dialogRef.beforeClosed().subscribe(() =>{
      this.employerService.getOffersById(this.id)
      .subscribe(resp => this.offers = resp);
    })

  }

}
