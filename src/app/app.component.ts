import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void{
    this.isAuth();
  }
  isAuthenticated = false;

  isAuth(){
    if (sessionStorage.getItem('token') != null){
      this.isAuthenticated = true;
    }
    else{
      this.isAuthenticated = false;
    }
  }

  title = 'Frontend-EzLabor';
}
