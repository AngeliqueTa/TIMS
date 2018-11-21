import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Views/Home/Home.component';
import { NavComponent } from './Components/Nav/Nav.component';
import { FooterComponent } from './Components/Footer/footer.component';
import { Tim1Component } from './Views/Tim1/Tim1.component';
import { Tim2Component } from './Views/Tim2/Tim2.component';
import { Tim3Component } from './Views/Tim3/Tim3.component';
import { Tim4Component } from './Views/Tim4/Tim4.component';
import { ContactUsComponent } from './Views/ContactUs/Contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    Tim1Component,
    Tim2Component,
    Tim3Component,
    Tim4Component,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    AppRoutingModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
