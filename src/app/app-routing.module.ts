import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './service/auth.service';
import { AuthGuardGuard } from './service/auth-guard.guard';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormEditClientesComponent } from './components/form-edit-clientes/form-edit-clientes.component';
import { FormEditUsuariosComponent } from './components/form-edit-usuarios/form-edit-usuarios.component';
import { VeiculoComponent } from './components/veiculo/veiculo.component';
import { FormEditVeiculoComponent } from './components/form-edit-veiculo/form-edit-veiculo.component';
import { FormManifestoComponent } from './components/form-manifesto/form-manifesto.component';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';


  const routes: Routes = [
   {path: '', component: LoginComponent},
   {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuardGuard]},
   {path:'lista', component:ClientListComponent, canActivate:[AuthGuardGuard]},
   {path:'cliente', component:ClientesComponent, canActivate:[AuthGuardGuard]},
   {path:'veiculo', component:VeiculoComponent, canActivate:[AuthGuardGuard]},
   {path:'usuario', component:UsuariosListaComponent, canActivate:[AuthGuardGuard]},

   {path:'manifesto', component:FormManifestoComponent},
   {path:'edit/:id', component:FormEditComponent, canActivate:[AuthGuardGuard]},
   {path:'edit-clientes/:id', component:FormEditClientesComponent, canActivate:[AuthGuardGuard]},
   {path:'save-clientes', component:FormEditClientesComponent, canActivate:[AuthGuardGuard]},
   {path:'save-veiculos', component:FormEditVeiculoComponent, canActivate:[AuthGuardGuard]},

   {path:'edit-usuarios/:id', component:FormEditUsuariosComponent, canActivate:[AuthGuardGuard]},
   {path:'edit-veiculos/:id', component:FormEditVeiculoComponent, canActivate:[AuthGuardGuard]},



  
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})






export class AppRoutingModule { }
