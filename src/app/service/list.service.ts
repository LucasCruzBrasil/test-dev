import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, catchError, retry, tap } from 'rxjs';
import { User } from '../model/user';
import { Empresa } from '../model/empresa';



@Injectable({
  providedIn: 'root'
})
export class ListService {
  public readonly URL = "https://apilyon.7vi.app.br/api/v1/Empresa/"



  constructor(private http: HttpClient, private authService: AuthService) { }
  user: User
  empresa: Empresa




  getDataWithBearerToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get<any>(`${this.URL}`, { headers });
  }


  getDataId(id: string) {
    const token = this.authService.loggedIn();
    console.log(token)
    console.log(id)
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.get<User>(`${this.URL}` + id, { headers }).pipe(tap(console.log))

  }


  // updateEmpresa(id, Empresa): Observable<any> {
  //   const token = this.authService.loggedIn();
  //   const url = this.URL + id.join(',');
  //   const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'accept': 'application/json', 'Content-Type': 'application/json' });
  //   return this.http.put<Empresa>(url, this.empresa,{headers});
  // }
  updateEmpresa(id, empresa) {
    const token = this.authService.loggedIn();
    // const url = this.URL + id.join(',');
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'accept': 'application/json', 'Content-Type': 'application/json' });
    return this.http.put<Empresa>(this.URL + id, empresa, { headers })

  }

  insereEmpresa(empresa) {
    const token = this.authService.loggedIn();
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'accept': 'application/json', 'Content-Type': 'application/json' });
    console.log(empresa)
    return this.http.post(this.URL, empresa, { headers }).pipe(
      tap(console.log)

    )
  }


}
