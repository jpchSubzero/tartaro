import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  rememberMe: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    let emailStored = localStorage.getItem('email');
    if (emailStored) {
      this.user.email = emailStored;
      this.rememberMe = true;
    }    
  }

  login(formLogin: NgForm) {
    if (formLogin.invalid) {
      return;     
    }    

    Swal.fire({
      icon: 'info',
      title: 'Procesando...',
      text: 'Por favor espere...',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.auth.logIn(this.user).subscribe(response => {
      console.log(response);
      Swal.close();

      if (this.rememberMe) {
        localStorage.setItem('email', this.user.email);
      } else {
        localStorage.removeItem('email');
      }

      this.router.navigateByUrl('/home');
    }, errorResponse => {
      console.log(errorResponse.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: errorResponse.error.error.message,
        allowOutsideClick: false
      });
    });

    console.log(this.user);
    console.log(formLogin);
  }
}
