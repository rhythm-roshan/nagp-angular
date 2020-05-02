import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StateWiseComponent } from 'src/app/dashboard/state-wise/state-wise.component';
import { LoginComponent } from 'src/app/admin/login/login.component';
import { dashboardRoutes } from 'src/app/dashboard/dashboard-route/dashboard-route.module';
import { PageNotFoundComponent } from 'src/app/shared/component/page-not-found/page-not-found.component';
import { AdminModule } from 'src/app/admin/admin.module';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { HomeComponent } from 'src/app/dashboard/home/home.component';

export const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: HomeComponent, children: [...dashboardRoutes]},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    AdminModule,
    DashboardModule   
  ],
  exports: [RouterModule,
    AdminModule,
    DashboardModule  
  ]
})
export class AppRoutingModule { }
