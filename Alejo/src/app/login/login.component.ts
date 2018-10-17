import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email: string ;
  Password: string;
  operacion: any = 'login';

  constructor(private servicio: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  login() {
    this.servicio.loginWithEmail(this.Email, this.Password).then((data) => {
      console.log(data);
      this.router.navigate(['home']);
    }, (error) => {
      console.log(error);
    });
  }
  register() {
    this.servicio.registerWithEmail(this.Email, this.Password);
  }
}
