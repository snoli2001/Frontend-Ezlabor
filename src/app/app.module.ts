import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';


//Components
import { PostulationCardComponent } from './components/postulation-card/postulation-card.component';
import { SearchComponent } from './pages/search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import { ProfileComponent } from './pages/profile/profile.component'
import { AuthInterceptor} from "./http-interceptors/auth-interceptor";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MatNativeDateModule } from '@angular/material/core';
import { RegisterFreelancerComponent } from './auth/register/register-freelancer/register-freelancer.component';
import { RegisterEmployerComponent } from './auth/register/register-employer/register-employer.component';
import { ApplyPostulationsComponent } from './pages/apply-postulations/apply-postulations.component';

@NgModule({
  declarations: [
    AppComponent,
    PostulationCardComponent,
    SearchComponent,
    HeaderComponent,
    PostulationsComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFreelancerComponent,
    RegisterEmployerComponent,
    ApplyPostulationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
