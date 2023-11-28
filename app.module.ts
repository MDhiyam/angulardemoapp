import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MycalcComponent } from './mycalc/mycalc.component' ;
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ToastrComponent } from './toastr/toastr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderModule } from './slider/slider.module';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    MycalcComponent,
    ToastrComponent,
    AnimationComponent,
    ForgotPasswordComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselComponent,
    HammerModule,
    SliderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass : "toast-top-right",
      preventDuplicates : true,
      timeOut : 3000,
      easing : 'ease-in',
      easeTime : 1000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
