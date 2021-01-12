import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';


const routes: Routes = [
  
  { path: '', component: LandingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
