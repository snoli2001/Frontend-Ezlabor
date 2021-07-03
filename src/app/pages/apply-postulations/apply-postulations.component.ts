import {Component, Input, OnInit} from '@angular/core';
import {OffersService} from "../../services/offers-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorsService} from "../../services/validators.service";
import {PostulationApiService} from "../../services/postulation-api.service";


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

  constructor(private offerApiService: OffersService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
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
  }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.fb.group({
      amount: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(240)]],
    });
  }

  postulate(){
    console.log(this.form);
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
    //this.postulationsService.postPostulation().subscribe(() => this.router.navigateByUrl('/home'))
  }

  get amountInvalid(){
    return this.form?.get('amount')?.invalid && this.form.get('amount')?.touched;
  }
  get commentInvalid(){
    return this.form?.get('comment')?.invalid && this.form.get('comment')?.touched;
  }
}
