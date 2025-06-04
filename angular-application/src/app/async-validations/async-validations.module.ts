import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncValidationsRoutingModule } from './async-validations-routing.module';
import { AsyncValidationsComponent } from './async-validations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AsyncValidationsComponent
  ],
  imports: [
    CommonModule,
    AsyncValidationsRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class AsyncValidationsModule { }
