import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountDetailsComponent,
    ProfileComponent,
    ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule
  ]
})
export class MainPageModule { }
