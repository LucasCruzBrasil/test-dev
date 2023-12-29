import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, map, tap } from 'rxjs';
import { Veiculo } from '../model/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  public readonly URL = "https://apilyon.7vi.app.br/api/v1/Veiculo/"

  constructor(private http: HttpClient,  private authService: AuthService) { }

   veiculo:Veiculo
  getDataWithBearerToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get<any>(`${this.URL}`, { headers });
  }
   
  getDataId(id:string){
    const token = this.authService.loggedIn();
    console.log(token)
    console.log(id)
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get<Veiculo>(`${this.URL}` + id, {headers}).pipe(tap(console.log))

  }

  updateVeiculo(id, veiculo){
    const token = this.authService.loggedIn();
    // const url = this.URL + id.join(',');
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'accept': 'application/json', 'Content-Type': 'application/json' });
    return this.http.put<Veiculo>(this.URL + id, veiculo, {headers} )

 }

 insereVeiculo(veiculo) {
  const token = this.authService.loggedIn();
  const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'accept': 'application/json', 'Content-Type': 'application/json' });
  console.log(veiculo)
  return this.http.post(this.URL, veiculo, { headers }).pipe(
    tap(console.log)

  )


}

deletaVeiculo(id){
  const token = this.authService.loggedIn();
  const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'accept': 'application/json', 'Content-Type': 'application/json' });
  console.log(id);
  return this.http.delete<any>(this.URL + id, {headers}).pipe(
    map(
      retorno => retorno
    )
  )
}


}


