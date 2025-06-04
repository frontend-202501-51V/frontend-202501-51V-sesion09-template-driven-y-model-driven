import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegratedValidationsRoutingModule } from './integrated-validations-routing.module';
import { IntegratedValidationsComponent } from './integrated-validations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IntegratedValidationsComponent
  ],
  imports: [
    CommonModule,
    IntegratedValidationsRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class IntegratedValidationsModule { }
