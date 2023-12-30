import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/model/empresa';
import { AuthService } from 'src/app/service/auth.service';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-form-edit-empresa',
  templateUrl: './form-edit-empresa.component.html',
  styleUrls: ['./form-edit-empresa.component.css']
})
export class FormEditEmpresaComponent implements OnInit {
  
 formEdit:FormGroup
 empresa : Empresa[]
 constructor(private http: ListService, private authService: AuthService){}
 
 
 
  ngOnInit(): void {
     this.listEmpresa()
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
      precisao: new FormControl(''),
      latidude: new FormControl(''),
      longitude: new FormControl(''),
      criado_em: new FormControl(''),
      atualizado_em: new FormControl(''),
      ativo: new FormControl(''),
      empresa_id: new FormControl('')
    })

  }

  listEmpresa(){
    const token = this.authService.loggedIn()
    this.http.getDataWithBearerToken(token).subscribe(
      data => this.empresa = data['data']
    )
  }

saveEmpresa() {
  const dados = this.formEdit.value

  if(dados['id'] === '') {
    delete dados['id'] 
    delete dados['criado_em']
    delete dados['atualizado_em']
    delete dados['empresa_id']
    delete dados['latidude']
    delete dados['longitude']
    delete dados['precisao']

  }

  this.http.insereEmpresa(this.formEdit.value).subscribe(
    res => {console.log(res)}
  )
}



}

  



  
  