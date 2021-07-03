import {Component, Input, OnInit} from '@angular/core';
import {OffersService} from "../../services/offers-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostulationApiService} from "../../services/postulation-api.service";
import { UserApiService } from '../../services/user-api.service';
import { FreelancerApiService } from '../../services/freelancer-api.service';
import { OfferInterface } from '../../models/offer.interface';


@Component({
  selector: 'app-apply-postulations',
  templateUrl: './apply-postulations.component.html',
  styleUrls: ['./apply-postulations.component.css']
})
export class ApplyPostulationsComponent implements OnInit {

  @Input()
  form!: FormGroup;
  offerId: number = 0;
  offer: OfferInterface | undefined;
  id: number;
  canApply: boolean = true;
  isLoading = true;

  constructor(private offerApiService: OffersService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private userService: UserApiService,
              private postulationsService: PostulationApiService,
              private freelancerService: FreelancerApiService,
              private rout: Router) {
    this.createForm();
    this.id = this.userService.getUserId() as number;
    this.router.params.subscribe(resp => {
      if(resp['id']) {
        this.offerId = resp['id'];

        this.offerApiService.getOfferById(this.offerId)
          .subscribe(resp => {this.offer = resp; this.isLoading = false; });
        
        this.offerApiService.getPostulationsById(this.offerId)
          .subscribe(resp => {
              resp.map( postulation => {
              if(postulation.freelancerId == this.id){
                this.canApply = false
              }
              
            })
          });

      }
    });
    
   
    
    

  }

  ngOnInit(): void {
    console.log(this.canApply);
  }

  createForm() {
    this.form = this.fb.group({
      desiredPayment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(240)]],
    });
  }

  postulate(){
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
    this.postulationsService.postPostulation( this.id,  this.offerId, newPostulation ).subscribe(() => this.rout.navigateByUrl('/postulations'))
  }

  get desiredPaymentInvalid(){
    return this.form?.get('desiredPayment')?.invalid && this.form.get('desiredPayment')?.touched;
  }
  get descriptionInvalid(){
    return this.form?.get('description')?.invalid && this.form.get('description')?.touched;
  }
}
