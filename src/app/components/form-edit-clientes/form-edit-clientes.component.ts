import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { AuthService } from 'src/app/service/auth.service';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-form-edit-clientes',
  templateUrl: './form-edit-clientes.component.html',
  styleUrls: ['./form-edit-clientes.component.css']
})
export class FormEditClientesComponent implements OnInit{
 
  formEdit: FormGroup
  cliente: Cliente[]

  constructor(private router: Router, private http: ClientesService, private route: ActivatedRoute, private authService: AuthService) {}
 
  ngOnInit(): void {
    this.listar();
    this.route.paramMap.subscribe(data => {
      const id = data['params']['id']
      console.log(id)
       this.http.getDataId(id).subscribe(
         res => {this.cliente = res, console.log(this.cliente['data']), this.updateForm(this.cliente)}
       )
     
   })

    this.formEdit = new FormGroup({
      id: new FormControl(''),
      razao_social: new FormControl('', [Validators.required]),
      nome_fantasia: new FormControl(''),
      cnpj: new FormControl('', [Validators.required]),
      nome_responsavel: new FormControl(''),
      // cpf_responsavel: new FormControl(''),
      email_responsavel: new FormControl(''),
      celular_responsavel: new FormControl(''),
      cep: new FormControl(''),
      logradouro: new FormControl('', [Validators.required]),
      numero_logradouro: new FormControl(''),
      complemento_logradouro:new FormControl(''),
      bairro:new FormControl(''),
      cidade:new FormControl(''),
      estado:new FormControl(''),
      precisao:new FormControl(''),
      latidude:new FormControl(''),
      longitude: new FormControl(''),
      criado_em:new FormControl(''),
      atualizado_em:new FormControl(''),
      ativo:new FormControl(''),
      empresa_id: new FormControl('')
    })
  
  }
  voltar():void{
    this.router.navigate(['cliente'])
  }

  updatecliente(){
    const id = this.formEdit.value['id']
    console.log(this.formEdit.value)
    this.http.updateCliente(id, this.formEdit.value).subscribe(
     res => {
       this.router.navigate(['cliente'])
     }
    )
   }

   updateForm(data) {
    console.log(data['data']['id'])
    this.formEdit.patchValue({
      id:data['data']['id'],
      razao_social:data['data']['razao_social'],
      nome_fantasia:data['data']['nome_fantasia'],
      cnpj:data['data']['cnpj'],
      nome_responsavel:data['data']['nome_responsavel'],
      // cpf_responsavel:data['data']['cpf_responsavel'],
      email_responsavel:data['data']['email_responsavel'],
      celular_responsavel:data['data']['celular_responsavel'],
      cep:data['data']['cep'],
      logradouro:data['data']['logradouro'],
      numero_logradouro:data['data']['numero_logradouro'],
      complemento_logradouro:data['data']['complemento_logradouro'],
      bairro:data['data']['bairro'],
      cidade:data['data']['cidade'],
      estado:data['data']['estado'],
      precisao:data['data']['precisao'],
      latidude:data['data']['latidude'],
      longitude:data['data']['longitude'],
      criado_em:data['data']['criado_em'],
      atualizado_em:data['data']['atualizado_em'],
      ativo:data['data']['ativo'],
      empresa_id:['data'][' empresa_id']
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

}
