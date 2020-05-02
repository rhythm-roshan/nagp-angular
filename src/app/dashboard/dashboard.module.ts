import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateWiseComponent } from './state-wise/state-wise.component';
import { DistrictWiseComponent } from './district-wise/district-wise.component';
import { DashboardRouteModule } from './dashboard-route/dashboard-route.module';
import { HomeComponent } from './home/home.component';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import { PrecautionComponent } from './precaution/precaution.component';
import { AddLatestNewsComponent } from './add-latest-news/add-latest-news.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StateWiseComponent, DistrictWiseComponent, HomeComponent,PrecautionComponent,AddLatestNewsComponent,LatestNewsComponent],
  imports: [
    CommonModule,
    DashboardRouteModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardRouteModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
