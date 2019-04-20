import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { DataService } from './dataService/data.service';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { GetAllComponent } from './admin-dashboard/get-all/get-all.component';
import { AddOneComponent } from './admin-dashboard/add-one/add-one.component';
import { FindOneComponent } from './admin-dashboard/find-one/find-one.component';
import { DeleteOneComponent } from './admin-dashboard/delete-one/delete-one.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    AdminDashboardComponent,
    GetAllComponent,
    AddOneComponent,
    FindOneComponent,
    DeleteOneComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
