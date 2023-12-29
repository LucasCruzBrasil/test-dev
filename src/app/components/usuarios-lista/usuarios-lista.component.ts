import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { ClientesService } from 'src/app/service/clientes.service';
import { SidebarService } from 'src/app/service/controle-sidebar.service';
import { ListService } from 'src/app/service/list.service';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit{
   usuario:Usuario[]
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: ListService,
    private httpClientes: ClientesService,
    private authService: AuthService,
    private httpUsuario: UsuariosService,
    private server: SidebarService) {}

  ngOnInit(): void {
    this.listarUsuario()
  }

  listarUsuario() {
    const token = this.authService.loggedIn();
    this.httpUsuario.getUsuariosWithBearerToken(token).subscribe(data => {
      this.usuario = data['data']
      console.log(this.usuario)
    })
  }


  voltar():void{
    this.router.navigate(['dashboard'])
  }

}
