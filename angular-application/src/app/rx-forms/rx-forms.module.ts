import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxFormsRoutingModule } from './rx-forms-routing.module';
import { RxFormsComponent } from './rx-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RxFormsComponent
  ],
  imports: [
    CommonModule,
    RxFormsRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class RxFormsModule { }
