import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomValidationsRoutingModule } from './custom-validations-routing.module';
import { CustomValidationsComponent } from './custom-validations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomValidationsComponent
  ],
  imports: [
    CommonModule,
    CustomValidationsRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class CustomValidationsModule { }
