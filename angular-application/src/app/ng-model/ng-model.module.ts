import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModelRoutingModule } from './ng-model-routing.module';
import { NgModelComponent } from './ng-model.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgModelComponent
  ],
  imports: [
    CommonModule,
    NgModelRoutingModule,
    FormsModule
  ]
})
export class NgModelModule { }
