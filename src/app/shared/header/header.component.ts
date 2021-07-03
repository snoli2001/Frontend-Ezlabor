import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: Array<any> | undefined;

  id: number;
  userType: string | undefined;

  activeLink: any;

  constructor(private router: Router, private app: AppComponent,
              private userService:UserApiService) {
    this.id = this.userService.getUserId() as number;
   
  }

  ngOnInit(): void {

    this.userService.getUserType(this.id)
    .subscribe((resp: any) => {
      this.userType = resp.accountType;
      
      if(this.userType == 'FREELANCER'){
        this.links = [
          {
            name: 'Search job',
            route: '/home'
          },
          {
            name: 'Postulations',
            route: '/postulations'
          }
        ]
      }else {
        this.links = [
          {
            name: 'Home',
            route: '/home'
          },
          {
            name: 'My Offers',
            route: '/employer-offers'
          }
        ]
      } 
      this.activeLink = this.links[0];  
    })
    
     
  }

  logOut(){
    sessionStorage.clear();
    this.app.isAuthenticated = false;
    this.router.navigateByUrl("/login");
  }

}
