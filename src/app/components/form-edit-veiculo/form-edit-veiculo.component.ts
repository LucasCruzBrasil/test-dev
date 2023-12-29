import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/model/empresa';
import { Veiculo } from 'src/app/model/veiculo';
import { AuthService } from 'src/app/service/auth.service';
import { ListService } from 'src/app/service/list.service';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-form-edit-veiculo',
  templateUrl: './form-edit-veiculo.component.html',
  styleUrls: ['./form-edit-veiculo.component.css']
})
export class FormEditVeiculoComponent implements OnInit {

  formEditVeiculo: FormGroup
  veiculo: Veiculo[]
  mostra: boolean = false;
  some:boolean = true
  empresa:Empresa[]
  tipos = [{tipo:'nao_informado'}, {tipo:'caminhao_compactador'},{ tipo:'caminhao_basculante'},{ tipo:'caminhao_basculante_truckado'},{tipo: 'caminhao_bau'}]
 
  constructor(private router: Router, 
    private authService: AuthService,
    private route: ActivatedRoute,
    private http: VeiculoService,
    private httpEmpresa: ListService) { }

  ngOnInit(): void {


    if (this.router.routerState.snapshot.url != '/save-veiculos') {


      this.route.paramMap.subscribe(data => {
        const id = data['params']['id']
        console.log(id)
        this.http.getDataId(id).subscribe(
          res => { this.veiculo = res, console.log(this.veiculo['data']), this.updateForm(this.veiculo) }
        )

      })

    } else {
      this.analisaRota()
      this.listarEmpresa()
    }



    this.formEditVeiculo = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(''),
      marca: new FormControl(''),
      modelo: new FormControl(''),
      ano_fabricacao: new FormControl(''),
      placa: new FormControl(''),
      capacidade: new FormControl(''),
      imei_dispositivo_rastreamento: new FormControl(''),
      tipo_veiculo: new FormControl(''),
      empresa_id: new FormControl(''),
      ultima_loca_lizacao_id: new FormControl(''),
      criado_em: new FormControl(''),
      atualizado_em: new FormControl(''),
      ativo: new FormControl('')
    })
  }

  voltar(): void {
    this.router.navigate(['veiculo'])
  }

  updateForm(data) {
    this.formEditVeiculo.patchValue({
      id: data['data']['id'],
      nome: data['data']['nome'],
      marca: data['data']['marca'],
      modelo: data['data']['modelo'],
      ano_fabricacao: data['data']['ano_fabricacao'],
      placa: data['data']['placa'],
      capacidade: data['data']['capacidade'],
      imei_dispositivo_rastreamento: data['data']['imei_dispositivo_rastreamento'],
      tipo_veiculo: data['data']['tipo_veiculo'],
      empresa_id: data['data']['empresa_id'],
      ultima_loca_lizacao_id: data['data']['ultima_loca_lizacao_id'],
      criado_em: data['data']['criado_em'],
      atualizado_em: data['data']['atualizado_em'],
      ativo: data['data']['ativo']



    })
  }

  updateVeiculo() {
    const id = this.formEditVeiculo.value['id']
    console.log(this.formEditVeiculo.value)
    this.http.updateVeiculo(id, this.formEditVeiculo.value).subscribe(
      res => {
        this.router.navigate(['veiculo'])
      }
    )
  }


  saveVeiculo() {
    const dados = this.formEditVeiculo.value;
    
    if(dados['id'] == ''){
      delete dados['id']
      delete dados['ultima_loca_lizacao_id']
      delete dados['criado_em']
      delete dados['atualizado_em']
      delete dados['imei_dispositivo_rastreamento']
    }

    this.http.insereVeiculo(dados).subscribe(
      res => { this.router.navigate(['veiculo']), console.log(res) }
    )
  }

  analisaRota() {
    if (this.router.routerState.snapshot.url == '/save-veiculos') {
      this.mostra = true
      this.some =false

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
