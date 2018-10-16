import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import {RouterModule} from '@angular/router';

import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './Nav/Nav.component';
import { FooterComponent } from './css/Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent
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
