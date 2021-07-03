import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./pages/search/search.component";
import {PostulationsComponent} from "./pages/postulations/postulations.component";
import {ProfileComponent} from "./templates/profile/profile.component";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterFreelancerComponent } from './auth/register/register-freelancer/register-freelancer.component';
import { RegisterEmployerComponent } from './auth/register/register-employer/register-employer.component';
import {ApplyPostulationsComponent} from "./pages/apply-postulations/apply-postulations.component";
import { HomeComponent } from './templates/home/home.component';
import { EmployerOffersComponent } from './pages/employer-offers/employer-offers.component';
import { ViewFreelancerProfileComponent } from './pages/view-freelancer-profile/view-freelancer-profile.component';
import { OfferPostulationsComponent } from './pages/offer-postulations/offer-postulations.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'postulations', component: PostulationsComponent},
  {path: 'employer-offers', component: EmployerOffersComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register/freelancer', component: RegisterFreelancerComponent},
  {path: 'register/employer', component: RegisterEmployerComponent},
  {path: 'apply-postulations/:id', component: ApplyPostulationsComponent},
  {path: 'offer-postulations/:id', component: OfferPostulationsComponent},
  {path: 'freelancer/:id', component: ViewFreelancerProfileComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
