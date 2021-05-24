import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: UserModel;
  rememberMe: boolean = false;

  constructor(
    private auth:AuthService, 
    private router:Router
  ) { }

  ngOnInit() { 
    this.user = new UserModel();
  }

  onSubmit(formRegister:NgForm) {
    if (formRegister.invalid) {
      return;     
    }
    Swal.fire({
      icon: 'info',
      title: 'Procesando...',
      text: 'Por favor espere...',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.auth.registerNewUser(this.user).subscribe(response => {
      console.log(response);
      Swal.close();

      if (this.rememberMe) {
        localStorage.setItem('email', this.user.email);
      } else {
        localStorage.removeItem('email');
      }

      this.router.navigateByUrl('/home');
      Swal.fire({
        icon: 'info',
        title: 'usuarios',
        text: 'Usuario creado correctamente',
        allowOutsideClick: false
      });
    }, errorResponse =>{
      console.log(errorResponse.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: errorResponse.error.error.message,
        allowOutsideClick: false
      });
    });
    console.log(this.user);
    console.log(formRegister);
  }
}
