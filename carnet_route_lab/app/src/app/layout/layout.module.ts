import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, 
    ContactComponent, 
    AboutusComponent, 
    NavbarComponent, 
    LeftSideBarComponent, 
    FooterComponent],
  imports: [
   MaterialModule,
   FlexLayoutModule,
   RouterModule
  ],
  exports:[HomeComponent, 
    ContactComponent, 
    AboutusComponent, 
    NavbarComponent, 
    LeftSideBarComponent, 
    FooterComponent]
})
export class LayoutModule { }
