import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { Empresa } from 'src/app/model/empresa';
import { AuthService } from 'src/app/service/auth.service';
import { ClientesService } from 'src/app/service/clientes.service';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-form-edit-clientes',
  templateUrl: './form-edit-clientes.component.html',
  styleUrls: ['./form-edit-clientes.component.css']
})
export class FormEditClientesComponent implements OnInit {
  empresa: Empresa[]
  formEdit: FormGroup
  cliente: Cliente[]
  clienteSave: Cliente
  showInputSelectEmpresa: boolean = false
  esconderBotao: boolean = true
 
  constructor(
    private httpEmpresa: ListService, 
    private router: Router, 
    private http: ClientesService, 
    private route: ActivatedRoute, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.clienteSave = new Cliente()
    this.listarEmpresa()
    this.analisaRota()
    this.listar();
    this.route.paramMap.subscribe(data => {
      const id = data['params']['id']
      console.log(id)
      this.http.getDataId(id).subscribe(
        res => { this.cliente = res, console.log(this.cliente['data']), this.updateForm(this.cliente) }
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
      complemento_logradouro: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
      precisao: new FormControl(''),
      latidude: new FormControl(''),
      longitude: new FormControl(''),
      criado_em: new FormControl(''),
      atualizado_em: new FormControl(''),
      ativo: new FormControl(''),
      empresa_id: new FormControl('')
    })

  }
  voltar(): void {
    this.router.navigate(['cliente'])
  }
  
  saveCliente() {
    const dados = this.formEdit.value;
    // const propsToRemove = ['id', 'precisao'];

    // for (const prop in propsToRemove) {
    //   if (dados.hasOwnProperty(prop) && (dados[prop] === null || dados[prop] === '')) {
    //     delete dados[prop];
    //   }
    // }
    if(dados['id'] === ''){
      delete dados['id']
      delete dados['criado_em']
      delete dados['atualizado_em']
    }
    // if(dados['precisao'] === ''){
    //   delete dados['precisao']
    // }
    if(dados['latidude'] === '' || dados['precisao'] === ''){
       dados['precisao']= 10
       dados['latidude']= 20
       dados['longitude']= 20
    }
   this.http.insereCliente(dados).subscribe(
       res =>{ this.router.navigate(['cliente']),console.log(res)}
    )
  }


  updatecliente() {
    const dados = this.formEdit.value
    console.log(this.formEdit.value['empresa_id'])
    const id = this.formEdit.value['id']
    console.log(this.formEdit.value[''])
    this.cliente = this.formEdit.value
    this.http.updateCliente(id, this.cliente).subscribe(
      res => {
        this.router.navigate(['cliente'])
      }
    )
  }

  updateForm(data) {
    console.log(data['data']['id'])
    this.formEdit.patchValue({
      id: data['data']['id'],
      razao_social: data['data']['razao_social'],
      nome_fantasia: data['data']['nome_fantasia'],
      cnpj: data['data']['cnpj'],
      nome_responsavel: data['data']['nome_responsavel'],
      // cpf_responsavel:data['data']['cpf_responsavel'],
      email_responsavel: data['data']['email_responsavel'],
      celular_responsavel: data['data']['celular_responsavel'],
      cep: data['data']['cep'],
      logradouro: data['data']['logradouro'],
      numero_logradouro: data['data']['numero_logradouro'],
      complemento_logradouro: data['data']['complemento_logradouro'],
      bairro: data['data']['bairro'],
      cidade: data['data']['cidade'],
      estado: data['data']['estado'],
      precisao: data['data']['precisao'],
      latidude: data['data']['latidude'],
      longitude: data['data']['longitude'],
      criado_em: data['data']['criado_em'],
      atualizado_em: data['data']['atualizado_em'],
      ativo: data['data']['ativo'],
      empresa_id: ['data'][' empresa_id']
    })
  }

  listar() {
    const token = this.authService.loggedIn();

    this.http.getDataWithBearerToken(token).subscribe(
      data => {
        this.cliente = data['data'],
          console.log(this.cliente)
      }
    )
  }

  analisaRota() {
    if (this.router.routerState.snapshot.url == '/save-clientes') {
      this.showInputSelectEmpresa = true
      this.esconderBotao = false
    }
  }

  listarEmpresa() {
    const token = this.authService.loggedIn();

    this.httpEmpresa.getDataWithBearerToken(token).subscribe(
      data => {
        this.empresa = data['data'],
          console.log(this.empresa)
      }
    )
  }




}
