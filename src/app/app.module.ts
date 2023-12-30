import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormEditClientesComponent } from './components/form-edit-clientes/form-edit-clientes.component';
import { FormEditUsuariosComponent } from './components/form-edit-usuarios/form-edit-usuarios.component';
import { VeiculoComponent } from './components/veiculo/veiculo.component';
import { FormEditVeiculoComponent } from './components/form-edit-veiculo/form-edit-veiculo.component';
import { FormManifestoComponent } from './components/form-manifesto/form-manifesto.component';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';
import { FormEditEmpresaComponent } from './components/form-edit-empresa/form-edit-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientListComponent,
    DashboardComponent,
    FormEditComponent,
    ClientesComponent,
    FormEditClientesComponent,
    FormEditUsuariosComponent,
    VeiculoComponent,
    FormEditVeiculoComponent,
    FormManifestoComponent,
    UsuariosListaComponent,
    FormEditEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
