import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public readonly URL = "https://apilyon.7vi.app.br/api/v1/Cliente/"

  constructor(private http: HttpClient,  private authService: AuthService) { }
   user:User;

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
    return this.http.get<User>(`${this.URL}` + id, {headers}).pipe(tap(console.log))

  }

  updateCliente(id, empresa){
    const token = this.authService.loggedIn();
    // const url = this.URL + id.join(',');
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'accept': 'application/json', 'Content-Type': 'application/json' });
    return this.http.put<Cliente>(this.URL + id, empresa, {headers} )

 }
  
}
