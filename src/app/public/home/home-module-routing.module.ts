import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";


const routes: Routes = [
  {
    path:'', component:HomeComponent,children:[
      {
        path:'', component:HomePageComponent
      },
      {
        path:'login', component:LoginComponent
      },
      {
        path:'signup', component:SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
