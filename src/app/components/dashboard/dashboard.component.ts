import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Empresa } from 'src/app/model/empresa';
import { AuthService } from 'src/app/service/auth.service';
import { SidebarService } from 'src/app/service/controle-sidebar.service';
import { ListService } from 'src/app/service/list.service';
declare var $: any;                  //INSERT THIS LINE

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empresa:Empresa[]

  constructor(private http: ListService, private authService: AuthService, private server: SidebarService) {}
 
  ngOnInit(): void {
      
    $('[data-widget="treeview"]').Treeview('init');
    


     this.listar()
     
     

  }

  listar(){

    const token = this.authService.loggedIn();
  
    this.http.getDataWithBearerToken(token).subscribe(
      data => {
        this.empresa = data['data'],
        console.log(this.empresa)
      }
    )
   }

  

  get isSidebarOpen() {
    return this.server.isSidebarOpen$;
  }

  toggleSidebar() {
    this.server.toggleSidebar();
  }
  
  private initTreeview() {
    $('[data-widget="treeview"]').Treeview('close');
  }

  
}
