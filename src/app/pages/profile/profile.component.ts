import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { FreelancerInterface } from '../../models/Frelancer.interface';
import { FreelancerApiService } from '../../services/freelancer-api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileDialogComponent } from '../../components/dialogs/edit-profile-dialog/edit-profile-dialog.component';
import { UpdateFreelancerInterface } from '../../models/UpdateFreelancer.interface';
import { AddSkillComponent } from '../../components/dialogs/add-skill/add-skill.component';
import { SkillApiService } from '../../services/skill-api.service';

export interface Skill {
  id: 1,
  name: string,
  description: string,
  level: string,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  skills: Skill[] = [];
  text: string | undefined;
  id: number;
  freelancer: FreelancerInterface | undefined;

  constructor(private userService: UserApiService,
              private freelancerService: FreelancerApiService,
              public dialog: MatDialog,
              private skillService: SkillApiService,
              ) {
    
    this.id = this.userService.getUserId() as number;
    this.freelancerService.getFreelancerById(this.id)
      .subscribe( response => this.freelancer = response );
    this.freelancerService.getSkills(this.id)
      .subscribe( response => this.skills = response);
   }
  
  ngOnInit(): void {
    console.log(this.skills);
  }

  openEditDialog(){
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
        width: '500px',
        data: {
          id:           this.freelancer?.id,
          phone:        this.freelancer?.phone,
          description:  this.freelancer?.description,
          webPage:      this.freelancer?.webPage,
          facebookLink: this.freelancer?.facebookLink,
          instagramLink:this.freelancer?.instagramLink,
          twitterLink:  this.freelancer?.twitterLink,
          imageUrl:     this.freelancer?.imageUrl 
        }
    } );

    dialogRef.beforeClosed().subscribe(result => {
      this.freelancerService.getFreelancerById(this.id)
      .subscribe( response => this.freelancer = response );
    })

  }

  openAddSkillDialog() {
    const dialogRef = this.dialog.open(AddSkillComponent, {
      width: '500px',
    });

    dialogRef.beforeClosed().subscribe(result => {
      if (result) {
        this.skillService.addSkill(this.id, result).subscribe(() => {
          this.freelancerService.getSkills(this.id)
            .subscribe(response => this.skills = response);
        });
      }
    })
  }
}
