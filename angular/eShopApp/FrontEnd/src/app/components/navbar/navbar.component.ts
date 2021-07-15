import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/interfaces/login-request';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { EshopService } from 'src/app/services/eshop.service';
import { NotificationService } from 'src/app/services/notification.service';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { RegisterRequest } from '../../interfaces/register-request';
import { ProductResponse } from '../../interfaces/product-response';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public eshopService:EshopService,
    public auth:AuthService,
    private notification:NotificationService,
    private router:Router,
    public cart:CartService
  ) { }

  ngOnInit(): void {
  }

  getCategories() {
    this.eshopService.getCategories().subscribe(response => {
      console.log(response);
    });
  }

  logIn() {
    Swal.fire({
      title: 'Ingreso',
      html: `
      <form autocomplete="off">
      <input type="text" id="email" class="swal2-input" placeholder="E-mail" autocomplete="off" value="">
      <input type="password" id="password" class="swal2-input" placeholder="Password" autocomplete="off" >
      </form>
      `,
      confirmButtonText: 'Ingresar',
      focusConfirm: false,
      preConfirm: ():LoginRequest => {
        const login:LoginRequest = {
          email: (<HTMLInputElement>Swal.getPopup()?.querySelector('#email')).value,
          password: (<HTMLInputElement>Swal.getPopup()?.querySelector('#password')).value
        }

        if (!login) {
          Swal.showValidationMessage(`Por favor ingrese un e-mail y password válidos`)
        } else {
          if (!this.validateEmail(login.email)) {
            Swal.showValidationMessage(`Por favor ingrese un e-mail válido`)            
          }
        }
        return login
      }
    }).then((result:SweetAlertResult<LoginRequest>) => {
      this.auth.logIn(<LoginRequest>result.value);
    }) 
  }

  logOut() {
    this.notification.showAutoCloseAlert('Adios', this.eshopService.customer.firstName);
    this.auth.logOut();
  }

  signIn() {
    Swal.fire({
      title: 'Ingreso',
      html: `
        <form autocomplete="off">
        <input type="text" id="firstName" class="swal2-input" placeholder="Nombres" autocomplete="off" >
        <input type="text" id="lastName" class="swal2-input" placeholder="Apellidos" autocomplete="off" >
        <input type="email" id="email" class="swal2-input" placeholder="E-mail" autocomplete="off" >
        <input type="password" id="password" class="swal2-input" placeholder="Password" autocomplete="off" >
        <input type="password" id="confirmPassword" class="swal2-input" placeholder="Re-Password" autocomplete="off" >
        </form>
        `,
      confirmButtonText: 'Registrar',
      focusConfirm: false,
      preConfirm: ():RegisterRequest => {
        const register:RegisterRequest = {
          firstName: (<HTMLInputElement>Swal.getPopup()?.querySelector('#firstName')).value,
          lastName: (<HTMLInputElement>Swal.getPopup()?.querySelector('#lastName')).value,
          email: (<HTMLInputElement>Swal.getPopup()?.querySelector('#email')).value,
          password: (<HTMLInputElement>Swal.getPopup()?.querySelector('#password')).value,
          confirmPassword: (<HTMLInputElement>Swal.getPopup()?.querySelector('#confirmPassword')).value
        }

        if (!register) {
          Swal.showValidationMessage(`Por favor ingrese un e-mail y password válidos`)
        } else {
          if (!this.validateEmail(register.email)) {
            Swal.showValidationMessage(`Por favor ingrese un e-mail válido`)            
          }
        }
        return register
      }
    }).then((result:SweetAlertResult<RegisterRequest>) => {
      this.auth.signIn(<RegisterRequest>result.value);
    }) 
  }

  shoppingCart() {
    this.router.navigate(['/shoppingcart']);
  }

  search(criteria:string):void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate(['/search', criteria]));
  }

  validateEmail(email:string) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
   }  
}
