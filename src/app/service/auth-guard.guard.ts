import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    
  
    

    if (!this.authService.isAuthenticate() || !this.authService.loggedIn()) {
       this.router.navigate(['']);
       return false;
     }
     console.log(this.authService.isAuthenticate())
     return true;
   } 


  
}
