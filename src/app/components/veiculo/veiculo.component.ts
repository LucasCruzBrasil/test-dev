import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/model/veiculo';
import { AuthService } from 'src/app/service/auth.service';
import { ClientesService } from 'src/app/service/clientes.service';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  
  veiculo:Veiculo[]
  nameVeiculo:string
  constructor(private router: Router, private http: VeiculoService,  private authService: AuthService,private activeRouter:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.listarVeiculo()
  }

  listarVeiculo(){
    const token = this.authService.loggedIn();
  
    this.http.getDataWithBearerToken(token).subscribe(
      data => {
        this.veiculo = data['data'],
        console.log(this.veiculo)
      }
    )


  }

  voltarRota(){
    console.log('teste')
    this.router.navigate(['/dashboard'], { relativeTo: this.activeRouter });
    
   }

   onDelete(veiculo){
      console.log(veiculo.id)
      this.nameVeiculo = veiculo.nome

   }


   deletarValor(id) {
    this.http.deletaVeiculo(id).subscribe(
      res =>{ 
        console.log(res)
        this.listarVeiculo();
        
      }
    )
   

  }

}
