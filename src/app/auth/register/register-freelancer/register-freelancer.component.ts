import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidatorsService } from '../../../services/validators.service';
import { FreelancerApiService } from '../../../services/freelancer-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-freelancer',
  templateUrl: './register-freelancer.component.html',
  styleUrls: ['./register-freelancer.component.css']
})
export class RegisterFreelancerComponent implements OnInit {

  
  form!: FormGroup;
  minDate: Date;
  maxDate: Date;

  constructor(private fb: FormBuilder,
    private validators: ValidatorsService,
    private freelancerService:FreelancerApiService,
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
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', [ Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      profession: ['', [Validators.required, Validators.minLength(5)]],
      birthDate: ['', [Validators.required]],
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
    
    const {accountType, confirmPassword ,...newFreelancer} = this.form.value;
    newFreelancer.birthDate = (newFreelancer.birthDate as Date).toISOString();
    console.log(newFreelancer);
    this.freelancerService.createFreelancer(newFreelancer).subscribe(() => this.router.navigateByUrl('/login'))
  }
  
  


  get usernameInvalid(){
    return this.form?.get('username')?.invalid && this.form.get('username')?.touched;
  }
  get firstnameInvalid(){
    return this.form?.get('name')?.invalid && this.form.get('name')?.touched;
  }
  get lastnameInvalid(){
    return this.form?.get('lastname')?.invalid && this.form.get('lastname')?.touched;
  }
   get emailInvalid(){
    return this.form?.get('email')?.invalid && this.form.get('email')?.touched;
  }
  get phoneInvalid(){
    return this.form?.get('phone')?.invalid && this.form.get('phone')?.touched;
  }
  get professionInvalid(){
    return this.form?.get('profession')?.invalid && this.form.get('profession')?.touched;
  }
  get birthDateInvalid(){
    return this.form?.get('birthDate')?.invalid && this.form.get('birthDate')?.touched;
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
