import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorsService} from "../../../services/validators.service";

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
              private validators: ValidatorsService) {
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
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      personalPhone: ['', [ Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      contactCompanyEmail: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      companyPhone: ['', [ Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      companyWeb: ['', [Validators.required, Validators.minLength(5)]],
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

    const {accountType, confirmPassword ,...newEmployer} = this.form.value

    console.log(newEmployer);

  }

  get usernameInvalid(){
    return this.form?.get('username')?.invalid && this.form.get('username')?.touched;
  }
  get companyNameInvalid(){
    return this.form?.get('companyName')?.invalid && this.form.get('companyName')?.touched;
  }
  get personalPhoneInvalid(){
    return this.form?.get('personalPhone')?.invalid && this.form.get('personalPhone')?.touched;
  }
  get contactCompanyEmailInvalid(){
    return this.form?.get('contactCompanyEmail')?.invalid && this.form.get('contactCompanyEmail')?.touched;
  }
  get companyPhoneInvalid(){
    return this.form?.get('companyPhone')?.invalid && this.form.get('companyPhone')?.touched;
  }
  get companyWebInvalid(){
    return this.form?.get('companyWeb')?.invalid && this.form.get('companyWeb')?.touched;
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
