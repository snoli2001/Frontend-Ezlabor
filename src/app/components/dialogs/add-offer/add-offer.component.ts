import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpecialtiesService } from '../../../services/specialties-api.service';
import { SpecialtyInterface } from '../../../models/specialty.interface';
import { EmployerApiService } from '../../../services/employer-api.service';
import { UserApiService } from '../../../services/user-api.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  form!: FormGroup;
  minDate: Date;
  specialties: any[] =[];
  id: number;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddOfferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
     private specialtiesService:SpecialtiesService,
     private employerService: EmployerApiService,
     private userService:UserApiService
    ) {
  
      this.id = this.userService.getUserId() as number;
      const currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear + 0, 0, 1);

      this.specialtiesService.getSpecialties()
        .subscribe((specialtiesResponse: SpecialtyInterface[] | any) => this.specialties = specialtiesResponse )
    }
    

  ngOnInit(): void {
  }

  createOffer(form: NgForm){
    if( form.invalid ){
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      })

      return;
    }
    const newOffer = form.value;
    newOffer.startDate = (newOffer.startDate as Date).toISOString();
    newOffer.endDate = (newOffer.endDate as Date).toISOString();
    
    console.log(newOffer);
    this.employerService
    .createOffer(this.id, newOffer).subscribe(()=> this.dialogRef.close())


  }

}
