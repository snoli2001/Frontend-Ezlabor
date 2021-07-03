import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginInterface } from '../../models/Login.interface';
import { AuthApiService } from '../../services/auth-api.service';
import jwt_decode from "jwt-decode";
import { UserApiService } from '../../services/user-api.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm : LoginInterface = {
    email: 'sebastian.noli@gmail.com',
    password: '123456',
  };

  constructor(private authService: AuthApiService,
              private userService: UserApiService,
              private router: Router, private app: AppComponent) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    if( form.invalid ){
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      })

      return;
    }
    this.loginForm = form.value;
    this.authService.login(this.loginForm).subscribe(resp => {
      if(resp.token != null){
        sessionStorage.setItem('token','Bearer ' + resp.token);
        const decoded:any = jwt_decode(resp.token);
        const id = decoded.sub;
        this.userService.getUserType(id).subscribe((resp: any) => console.log(resp.accountType));
        this.app.isAuthenticated = true;
        this.router.navigateByUrl('/home');
      } else {
        console.log("NO AUTORIZADO")
      }
    });
  }
  
  

}
