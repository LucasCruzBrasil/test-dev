import { DashboardComponent } from './../dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/model/empresa';
import { AuthService } from 'src/app/service/auth.service';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{
  
  empresa:Empresa[]
  constructor(private http: ListService, private authService: AuthService) {}
 
  ngOnInit(): void {
    const token = this.authService.loggedIn();
    this.http.getDataWithBearerToken(token).subscribe(
      data => {
        this.empresa = data['data'],
        console.log(this.empresa)
      }
    )
   
   
} 
}