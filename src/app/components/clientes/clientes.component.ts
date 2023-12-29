import { ClientesService } from './../../service/clientes.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from 'src/app/model/cliente';
import { ListService } from 'src/app/service/list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import cli from '@angular/cli';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})


export class ClientesComponent implements OnInit {
   cliente: Cliente[]
   formEdit: FormGroup
   nameCliente:string
   id:string
  constructor(private http: ClientesService, private authService: AuthService, private router: Router, private activeRouter:ActivatedRoute) {}

  ngOnInit(): void {
    
    this.listar()

    this.formEdit = new FormGroup({
      id: new FormControl(''),
      razao_social: new FormControl('', [Validators.required]),
      nome_fantasia: new FormControl(''),
      cnpj: new FormControl('', [Validators.required]),
      nome_responsavel: new FormControl(''),
      cpf_responsavel: new FormControl(''),
      email_responsavel: new FormControl(''),
      celular_responsavel: new FormControl(''),
      cep: new FormControl(''),
      logradouro: new FormControl('', [Validators.required]),
      numero_logradouro: new FormControl(''),
      complemento_logradouro:new FormControl(''),
      bairro:new FormControl(''),
      cidade:new FormControl(''),
      estado:new FormControl(''),
      presicao:new FormControl(''),
      latidude:new FormControl(''),
      longitude:new FormControl(''),
      criado_em:new FormControl(''),
      atualizado_em:new FormControl(''),
      ativo:new FormControl(''),
    })






    
  }

  listar(){
    const token = this.authService.loggedIn();
  
    this.http.getDataWithBearerToken(token).subscribe(
      data => {
        this.cliente = data['data'],
        console.log(this.cliente)
      }
    )
   }

   voltarRota(){
    this.router.navigate(['/dashboard'], { relativeTo: this.activeRouter });

   }

   onDelete(cliente){
    console.log(cliente.id)
    this.nameCliente = cliente.nome_responsavel
    this.id =cliente.id
 }


   deletarValor(id) {
    console.log(id)
    this.http.deletaCliente(id).subscribe(
      result => {
         this.listar();
      }
    )

  }

}
