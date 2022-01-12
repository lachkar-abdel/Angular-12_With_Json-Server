import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './EmployeeDashboard/EmployeeDashboard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{path:'dashboard',component:EmployeeDashboardComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
