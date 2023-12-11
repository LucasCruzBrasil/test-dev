import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User
  loginFormGroup:FormGroup

  constructor(private formBuilder:FormBuilder,
              private loginService:LoginService,
              private router: Router,
              private authService: AuthService){}

  ngOnInit(): void {
    this.user = new User()
    this.loginFormGroup =  this.formBuilder.group({
     login:['login', Validators.required],
      senha:['senha', Validators.required]

    })
  }

  doLogin(){
    if(this.loginFormGroup.valid){
      console.log(this.loginFormGroup.value)
     
      
      this.loginService.login(this.user).subscribe(
        (data )=> {
          const token = this.authService.loggedIn();
          console.log(token)
          this.authService.salvaLocal(data.data);
          this.authService.loggedIn()
           this.router.navigate(['dashboard'])
        }
      )
    }
  }
}
