import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { GetAllComponent } from './admin-dashboard/get-all/get-all.component';
import { AddOneComponent } from './admin-dashboard/add-one/add-one.component';
import { FindOneComponent } from './admin-dashboard/find-one/find-one.component';
// Declared routes for various pages
const routes: Routes = [
    {path: '', component: HomeComponent},
    {
      path: 'admin', component: AdminComponent ,
      children: [
        {
          path: 'dashboard', component: AdminDashboardComponent,
          children: [
            {path: 'all', component: GetAllComponent},
            {path: 'add', component: AddOneComponent},
            {path: 'find', component: FindOneComponent},
            {path: "**", redirectTo: 'all' , pathMatch: 'full'}
          ]
        },
        { path: '', component: AdminLoginComponent}
      ]
  
    },

    {path: "**", redirectTo: 'home' , pathMatch: 'full'} // Redirects to Home by Default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
