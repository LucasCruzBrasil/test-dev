import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

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
              private router: Router,){}

  ngOnInit(): void {
    this.loginFormGroup =  this.formBuilder.group({
     login:['login', Validators.required],
      senha:['senha', Validators.required]

    })
  }

  doLogin(){
    if(this.loginFormGroup.valid){
      this.loginService.login(this.user).subscribe(
        data => console.log(data)
      )
    }
  }
}
