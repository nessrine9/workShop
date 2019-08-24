import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './shared/material/material.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VehiculeListComponent } from './business/vehicule-list/vehicule-list.component';
import { VehiculeAddFormComponent } from './business/vehicule-add-form/vehicule-add-form.component';
import { VehiculeEditFormComponent } from './business/vehicule-edit-form/vehicule-edit-form.component';
import { VehiculeCardComponent } from './business/vehicule-card/vehicule-card.component';
import { JournalNavigationComponent } from './business/journal-navigation/journal-navigation.component';
import { LoginFormComponent } from './business/user/login-form/login-form.component';
import { ResgisterFormComponent } from './business/user/resgister-form/resgister-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    VehiculeListComponent,
    VehiculeAddFormComponent,
    VehiculeEditFormComponent,
    VehiculeCardComponent,
    JournalNavigationComponent,
    LoginFormComponent,
    ResgisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
