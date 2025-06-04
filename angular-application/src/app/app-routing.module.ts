import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'ng-model', loadChildren: () => import('./ng-model/ng-model.module').then(m => m.NgModelModule) },
   { path: 'rx-forms', loadChildren: () => import('./rx-forms/rx-forms.module').then(m => m.RxFormsModule) },
   { path: 'integrated-validations', loadChildren: () => import('./integrated-validations/integrated-validations.module').then(m => m.IntegratedValidationsModule) },
   { path: 'custom-validations', loadChildren: () => import('./custom-validations/custom-validations.module').then(m => m.CustomValidationsModule) },
   { path: 'async-validations', loadChildren: () => import('./async-validations/async-validations.module').then(m => m.AsyncValidationsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
