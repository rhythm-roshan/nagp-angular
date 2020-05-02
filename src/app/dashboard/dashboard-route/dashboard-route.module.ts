import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StateWiseComponent } from '../state-wise/state-wise.component';
import { DistrictWiseComponent } from '../district-wise/district-wise.component';
import { PrecautionComponent } from '../precaution/precaution.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';
import { AddLatestNewsComponent } from '../add-latest-news/add-latest-news.component';
import { AuthGuardGuard } from 'src/app/core/guard/auth-guard.guard';

export const dashboardRoutes: Routes = [
  {path: '',redirectTo: 'state', pathMatch:'full'},
  {path: 'state', component: StateWiseComponent},
  {path: 'district/:id', component: DistrictWiseComponent},
  {path: 'precaution', component: PrecautionComponent},
  {path: 'latest', component: LatestNewsComponent},  
  {path: 'addnews',component: AddLatestNewsComponent,canActivate:[AuthGuardGuard]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardRouteModule { }
