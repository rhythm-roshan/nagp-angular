import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule   
  ]
})
export class AdminModule { }
