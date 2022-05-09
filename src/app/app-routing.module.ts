import { ContactusComponent } from './contactus/contactus.component';
import { OurproductsComponent } from './ourproducts/ourproducts.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'our-services', component: OurservicesComponent },
  { path: 'our-products', component: OurproductsComponent },
  { path: 'contact-us', component: ContactusComponent },
  // { redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
