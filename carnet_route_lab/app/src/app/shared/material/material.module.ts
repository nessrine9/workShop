import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatListModule, 
  MatTabsModule, 
  MatSidenavModule,
} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
