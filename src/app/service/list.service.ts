import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public readonly URL = "https://apilyon.7vi.app.br/api/v1/Empresa"
  constructor(private http: HttpClient,  private authService: AuthService) { }

  getDataWithBearerToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get<any>(`${this.URL}`, { headers });
  }
}
