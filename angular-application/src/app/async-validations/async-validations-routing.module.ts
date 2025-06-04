import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncValidationsComponent } from './async-validations.component';

const routes: Routes = [{ path: '', component: AsyncValidationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncValidationsRoutingModule { }
