import { Component, Input, OnInit } from '@angular/core';
import { Empresa } from 'src/app/model/empresa';
import { AuthService } from 'src/app/service/auth.service';
import { ListService } from 'src/app/service/list.service';
import { map, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})

export class FormEditComponent implements OnInit{
  
  formEdit: FormGroup
  dadosDoFormulario: any[];
  empresa:Empresa

  

  constructor(private route: ActivatedRoute, private router: Router, private http: ListService){}

  
  ngOnInit(): void {
  this.route.paramMap.subscribe(data => {
       const id = data['params']['id']
       console.log(id)
        this.http.getDataId(id).subscribe(
          res => {this.empresa = res, console.log(this.empresa['data']), this.updateForm(this.empresa)}
        )
      
        
    })
    
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
      criado_em:new FormControl(''),
      atualizado_em:new FormControl(''),
      ativo:new FormControl(''),
    })
  
  }

  updateForm(data) {
    console.log(data['data']['id'])
    this.formEdit.patchValue({
      id:data['data']['id'],
      razao_social:data['data']['razao_social'],
      nome_fantasia:data['data']['nome_fantasia'],
      cnpj:data['data']['cnpj'],
      nome_responsavel:data['data']['nome_responsavel'],
      cpf_responsavel:data['data']['cpf_responsavel'],
      email_responsavel:data['data']['email_responsavel'],
      celular_responsavel:data['data']['celular_responsavel'],
      cep:data['data']['cep'],
      logradouro:data['data']['logradouro'],
      numero_logradouro:data['data']['numero_logradouro'],
      complemento_logradouro:data['data']['complemento_logradouro'],
      bairro:data['data']['bairro'],
      cidade:data['data']['cidade'],
      estado:data['data']['estado'],
      criado_em:data['data']['criado_em'],
      atualizado_em:data['data']['atualizado_em'],
      ativo:data['data']['ativo']
    })
   }
  
   updateEmpresa(){
   const id = this.formEdit.value['id']
   this.http.updateEmpresa(id, this.formEdit.value).subscribe(
    res => {
      this.router.navigate(['lista'])
    }
   )
  }

  voltar():void{
    this.router.navigate(['lista'])
  }
}
