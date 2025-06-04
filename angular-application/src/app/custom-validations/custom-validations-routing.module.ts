import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomValidationsComponent } from './custom-validations.component';

const routes: Routes = [{ path: '', component: CustomValidationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomValidationsRoutingModule { }
