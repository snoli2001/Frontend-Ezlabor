import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./pages/search/search.component";
import {PostulationsComponent} from "./pages/postulations/postulations.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterFreelancerComponent } from './auth/register/register-freelancer/register-freelancer.component';
import { RegisterEmployerComponent } from './auth/register/register-employer/register-employer.component';
import {FreelancerPostulationsComponent} from "./pages/freelancer-postulations/freelancer-postulations.component";
import {OfferPostulationsComponent} from "./pages/offer-postulations/offer-postulations.component";

const routes: Routes = [
  {path: 'home', component: SearchComponent},
  {path: 'postulations', component: PostulationsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register/freelancer', component: RegisterFreelancerComponent},
  {path: 'register/employer', component: RegisterEmployerComponent},
  {path: 'freelancer-postulations', component: FreelancerPostulationsComponent},
  {path: 'offerPostulations/:id', component: OfferPostulationsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
