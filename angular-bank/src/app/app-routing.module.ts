import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path:'main', loadChildren: () => import('./modules/main-page/main-page.module').then(m => m.MainPageModule)},
  {path:'', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
