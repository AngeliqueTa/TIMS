import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { Tim1Component } from './Tim1/Tim1.component';
import { ContactUsComponent } from './ContactUs/Contactus.component';
import { Tim2Component } from './Tim2/Tim2.component';
import { Tim3Component } from './Tim3/Tim3.component';
import { Tim4Component } from './Tim4/Tim4.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'timmsub1', component: Tim1Component},
  {path: 'timmsub2', component: Tim2Component},
  {path: 'timmsub3', component: Tim3Component},
  {path: 'timmsub4', component: Tim4Component},
  {path: 'contactus', component: ContactUsComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
