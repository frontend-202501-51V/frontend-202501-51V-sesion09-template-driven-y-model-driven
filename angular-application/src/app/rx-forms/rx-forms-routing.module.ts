import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxFormsComponent } from './rx-forms.component';

const routes: Routes = [{ path: '', component: RxFormsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxFormsRoutingModule { }
