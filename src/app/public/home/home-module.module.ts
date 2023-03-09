import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
