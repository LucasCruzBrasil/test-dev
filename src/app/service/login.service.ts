import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { ResponseLogin } from '../model/responseLogin';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  user:User
  public readonly URL = "https://apilyon.7vi.app.br/api/v1/Login/Auth"
  constructor(private http: HttpClient,  private authService: AuthService ) { }

  login(usuario:User):Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>(this.URL, usuario)
    .pipe(
     tap((loginResponse) => (
       this.authService.loginResponse = loginResponse,
       console.log(this.authService.loginResponse)
       ))
   ) 
   }
}
