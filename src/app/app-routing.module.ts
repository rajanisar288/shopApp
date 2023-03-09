import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeModuleModule} from "./public/home/home-module.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/home/home-module.module').then(m => m.HomeModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
