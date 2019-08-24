import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ContactComponent } from './layout/contact/contact.component';
import { AboutusComponent } from './layout/aboutus/aboutus.component';
import { VehiculeListComponent } from './business/vehicule-list/vehicule-list.component';
import { JournalNavigationComponent } from './business/journal-navigation/journal-navigation.component';
import { LoginFormComponent } from './business/user/login-form/login-form.component';
import { ResgisterFormComponent } from './business/user/resgister-form/resgister-form.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'vehicules', component:VehiculeListComponent},
  {path:'historique', component:JournalNavigationComponent},
  {path:'login', component:LoginFormComponent},
  {path:'signup', component:ResgisterFormComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
