import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorsService} from "../../../services/validators.service";
import {EmployerApiService} from "../../../services/employer-api.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register-employer',
  templateUrl: './register-employer.component.html',
  styleUrls: ['./register-employer.component.css']
})
export class RegisterEmployerComponent implements OnInit {

  form!: FormGroup;
  minDate: Date;
  maxDate: Date;

  constructor(private fb: FormBuilder,
              private validators: ValidatorsService,
              private employerService:EmployerApiService,
              private router: Router) {
    this.createForm();
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear- 14,0,1);
  }

  ngOnInit(): void {
  }
  createForm(){
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      personalPhone: ['', [ Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      firstname:['', [ Validators.required, Validators.minLength(3)]],
      lastname:['', [ Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: this.validators.samePasswords('password', 'confirmPassword')
    });
  }

  register(){
    console.log(this.form);

    if ( this.form.invalid ) {

      return Object.values( this.form.controls ).forEach( control => {

        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    }

    const {accountType, confirmPassword ,...newEmployer} = this.form.value;
    console.log(newEmployer);
    this.employerService.createEmployer(newEmployer).subscribe(() => this.router.navigateByUrl('/login'))

  }

  get usernameInvalid(){
    return this.form?.get('username')?.invalid && this.form.get('username')?.touched;
  }
  get personalPhoneInvalid(){
    return this.form?.get('personalPhone')?.invalid && this.form.get('personalPhone')?.touched;
  }
  
  get emailInvalid(){
    return this.form?.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get firstnameInvalid(){
    return this.form?.get('firstname')?.invalid && this.form.get('firstname')?.touched;
  }
  get lasttnameInvalid(){
    return this.form?.get('firstname')?.invalid && this.form.get('firstname')?.touched;
  }
  get passwordInvalid(){
    return this.form?.get('password')?.invalid && this.form.get('password')?.touched;
  }
  
  get confirmPasswordInvalid(){
    const pass1 = this.form?.get('password')?.value;
    const pass2 = this.form?.get('confirmPassword')?.value;
    return ( pass1 === pass2 ) ? false : true;
  }

}
