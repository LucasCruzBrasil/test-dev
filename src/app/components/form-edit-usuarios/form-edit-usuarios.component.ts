import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-form-edit-usuarios',
  templateUrl: './form-edit-usuarios.component.html',
  styleUrls: ['./form-edit-usuarios.component.css']
})
export class FormEditUsuariosComponent implements OnInit {
   formEditUsuarios:FormGroup
   usuarios:Usuario[]
  constructor(private router: Router, private http: UsuariosService, private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
     
    this.route.paramMap.subscribe(data => {
      const id = data['params']['id']
      console.log(id)
      this.http.getDataId(id).subscribe(
        res => {this.usuarios = res, console.log(this.usuarios['data']), this.updateForm(this.usuarios)}
      )
      
    })

    this.formEditUsuarios = new FormGroup({
      id: new FormControl(''),
      cpf: new FormControl('', [Validators.required]),
      nome_completo: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      celular: new FormControl(''),
     data_primeiro_acesso: new FormControl(''),
      primeiro_acesso: new FormControl(''),
      login:new FormControl(''),
      senha:new FormControl(''),
      ativo: new FormControl(''),
      ultimo_login: new FormControl(''),
      atualizado_em: new FormControl('', [Validators.required]),
      criado_em: new FormControl(''),
      empresa_id:new FormControl(''),
      
    })
  }

  voltar():void{
    this.router.navigate(['dashboard'])
  }

  updateForm(data) {
    console.log(data['data']['data_primeiro_acesso'])
    this.formEditUsuarios.patchValue({
      id:data['data']['id'],
      cpf:data['data']['cpf'],
      nome_completo:data['data']['nome_completo'],
      email:data['data']['email'],
      celular:data['data']['celular'],
      data_primeiro_acesso:data['data']['data_primeiro_acesso'],
      primeiro_acesso:data['data']['primeiro_acesso'],
      login:data['data']['login'],
      senha:data['data']['senha'], 
      ativo:data['data']['ativo'],
      ultimo_login:data['data']['ultimo_login'],
      atualizado_em:data['data']['atualizado_em'],
      criado_em:data['data']['criado_em'],
      empresa_id:data['data']['empresa_id']
     
    })
   }


   updateUsuario(){
    const id = this.formEditUsuarios.value['id']
    console.log(this.formEditUsuarios.value)
    this.http.updateUsuario(id, this.formEditUsuarios.value).subscribe(
     res => {
       this.router.navigate(['usuario'])
     }
    )
   }


}


