import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// Declared routes for various pages
const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home' , pathMatch: 'full'} // Redirects to Home by Default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
