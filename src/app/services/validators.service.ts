import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  samePasswords( password: string, confirmPassword: string ){
    return ( formGroup: FormGroup ) => {
      const pass1 = formGroup.controls[password];
      const pass2 = formGroup.controls[confirmPassword];
      
      if( pass1.value === pass2.value ){
        pass2.setErrors(null);
      } else {
        pass2.setErrors({ notMatch:  true});
      }

    }
  }

}
