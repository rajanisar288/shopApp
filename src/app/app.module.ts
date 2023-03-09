import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AdminComponent } from './features/admin/admin.component';
import { UserComponent } from './features/user/user.component';
import {HomeModuleModule} from "./public/home/home-module.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    AdminComponent,
    UserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModuleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
