import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './service/auth.service';
import { AuthGuardGuard } from './service/auth-guard.guard';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuardGuard]}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})






export class AppRoutingModule { }
