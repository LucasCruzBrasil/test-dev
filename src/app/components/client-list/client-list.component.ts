
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/model/empresa';
import { AuthService } from 'src/app/service/auth.service';
import { ListService } from 'src/app/service/list.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

declare var $: any;                  //INSERT THIS LINE

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  x: []
  empresa: Empresa[]
  formEdit: FormGroup
  usuario: Usuario[]
  helper = new JwtHelperService();

  decodedToken: any;


  constructor(private http: ListService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.decode()
    this.listar();
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
      complemento_logradouro: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
      criado_em: new FormControl(''),
      atualizado_em: new FormControl(''),
      ativo: new FormControl(''),
    })





  }

  voltarRota() {
    this.router.navigate(['dashboard'])
  }

  updateForm(empresa: Empresa[]) {
    this.formEdit.patchValue({
      id: empresa['id'],
      razao_social: empresa['razao_social'],
      nome_fantasia: empresa['nome_fantasia'],
      cnpj: empresa['cnpj'],
      nome_responsavel: empresa['nome_responsavel'],
      cpf_responsavel: empresa['cpf_responsavel'],
      email_responsavel: empresa['email_responsavel'],
      celular_responsavel: empresa['celular_responsavel'],
      cep: empresa['cep'],
      logradouro: empresa['logradouro'],
      numero_logradouro: empresa['numero_logradouro'],
      complemento_logradouro: empresa['complemento_logradouro'],
      bairro: empresa['bairro'],
      cidade: empresa['cidade'],
      estado: empresa['estado'],
      criado_em: empresa['criado_em'],
      atualizado_em: empresa['atualizado_em'],
      ativo: empresa['ativo']
    })
  }

  listar() {
    const token = this.authService.loggedIn();

    this.http.getDataWithBearerToken(token).subscribe(
      data => {
        this.empresa = data['data'],
          console.log(this.empresa)
      }
    )
  }



  onUpdate(empresa) {
    const takeId = empresa['id']
    console.log(takeId)
    this.http.getDataId(takeId).subscribe(
      res => {
        console.log(res['data'])
        this.x = res['data']
        this.updateForm(empresa)
      }
    )
  }

  updateEmpresa(empresa: Empresa[]) {
    const id = empresa.map(res => res.id)
    this.formEdit.value
    console.log(empresa)
    this.http.updateEmpresa(id, this.formEdit.value).subscribe(
      res => {
        this.listar()
      })
  }

  navegarParaFormularioEdit(dados: any) {
    console.log(dados)
    this.router.navigate(['/edit'], { state: { dadosFormulario: dados } })
  }


  decode(){
       const token = this.authService.loggedIn()
       this.decodedToken = this.helper.decodeToken(token)
       console.log(this.decodedToken)
  }

}

