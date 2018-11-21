import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import {RouterModule} from '@angular/router';

import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './Nav/Nav.component';
import { FooterComponent } from './Footer/footer.component';
import { Tim1Component } from './Tim1/Tim1.component';
import { ContactUsComponent } from './ContactUs/Contactus.component';
import { Tim2Component } from './Tim2/Tim2.component';
import { Tim3Component } from './Tim3/Tim3.component';
import { Tim4Component } from './Tim4/Tim4.component';

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
