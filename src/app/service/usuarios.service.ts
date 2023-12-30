import { Usuario } from 'src/app/model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  public readonly URL = "https://apilyon.7vi.app.br/api/v1/Usuario/"

  constructor(private http: HttpClient,  private authService: AuthService) { }
  usuario:Usuario
  getUsuariosWithBearerToken(token: string): Observable<any> {
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
    return this.http.get<Usuario>(`${this.URL}` + id, {headers}).pipe(tap(console.log))

  }

  updateUsuario(id, usuario){
    const token = this.authService.loggedIn();
    // const url = this.URL + id.join(',');
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'accept': 'application/json', 'Content-Type': 'application/json' });
    return this.http.put<Usuario>(this.URL + id, usuario, {headers} )

 }


 deletaUsuario(id){
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
