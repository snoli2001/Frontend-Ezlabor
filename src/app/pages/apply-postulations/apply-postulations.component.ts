import {Component, Input, OnInit} from '@angular/core';
import {OffersService} from "../../services/offers-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorsService} from "../../services/validators.service";
import {PostulationApiService} from "../../services/postulation-api.service";
import { UserApiService } from '../../services/user-api.service';


@Component({
  selector: 'app-apply-postulations',
  templateUrl: './apply-postulations.component.html',
  styleUrls: ['./apply-postulations.component.css']
})
export class ApplyPostulationsComponent implements OnInit {

  @Input()
  form!: FormGroup;
  offerId: number = 0;
  offers: any;
  id: number;

  constructor(private offerApiService: OffersService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private userService: UserApiService,
              private validators: ValidatorsService,
              private postulationsService: PostulationApiService,
              private rout: Router) {
    this.createForm();
    this.router.params.subscribe(resp => {
      if(resp['id']) {
        this.offerId = resp['id'];
        this.offerApiService.getOfferById(this.offerId).subscribe(resp => this.offers = resp);
      }
    });

    this.id = this.userService.getUserId() as number;



  }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.fb.group({
      desiredPayment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(240)]],
    });
  }

  postulate(){
    // console.log(this.form);
    if (this.form.invalid) {
      return Object.values( this.form.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    }
    const newPostulation = this.form.value;
    console.log(newPostulation);
    this.postulationsService.postPostulation( this.id,  this.offerId, newPostulation ).subscribe(() => this.rout.navigateByUrl('/home'))
  }

  get amountInvalid(){
    return this.form?.get('desiredPayment')?.invalid && this.form.get('desiredPayment')?.touched;
  }
  get descriptionInvalid(){
    return this.form?.get('description')?.invalid && this.form.get('description')?.touched;
  }
}
