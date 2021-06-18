import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./pages/search/search.component";
import {PostulationsComponent} from "./pages/postulations/postulations.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: 'home', component: SearchComponent},
  {path: 'postulations', component: PostulationsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
