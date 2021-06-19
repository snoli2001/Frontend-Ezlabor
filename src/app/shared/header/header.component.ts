import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = [
    {
      name: 'Search job',
      route: '/home'
    },
    {
      name: 'postulations',
      route: '/postulations'
    }
  ];

  activeLink = this.links[0];

  constructor(private router: Router, private app: AppComponent) { }

  ngOnInit(): void {
  }

  logOut(){
    sessionStorage.clear();
    this.app.isAuthenticated = false;
    this.router.navigateByUrl("/login");
  }

}
