import { Injectable } from '@angular/core';
import { ResponseLogin } from '../model/responseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse: ResponseLogin
 
  public clear(): void {
    this.loginResponse = undefined
  }

  public isAuthenticate(): boolean {
    return Boolean(this.loginResponse?.data)
  }

  public salvaLocal(data:string) {
    localStorage.setItem('token', data)
    
  }

  public loggedIn(){
    return localStorage.getItem('token')

  }
}
