import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService) {


  }

  ngOnInit() {
  }

  loginUser() {

    this.loginService.login(this.login);

  }

}
