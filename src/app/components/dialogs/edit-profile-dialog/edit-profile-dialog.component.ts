import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateFreelancerInterface } from '../../../models/UpdateFreelancer.interface';
import { NgForm } from '@angular/forms';
import { FreelancerApiService } from '../../../services/freelancer-api.service';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.css']
})
export class EditProfileDialogComponent implements OnInit {


  editProfile: UpdateFreelancerInterface | undefined;

  constructor(
  public dialogRef: MatDialogRef<EditProfileDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private freelancerService: FreelancerApiService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  updateProfile(form: NgForm){
    const updateData: UpdateFreelancerInterface = form.value; 
    console.log(updateData);
    this.freelancerService.updateFreelancer(this.data.id, updateData).subscribe(resp => {
      this.dialogRef.close()
    });
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

}
