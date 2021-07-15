import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { CustomerResponse } from '../interfaces/customers-response';
import { LoginRequest } from '../interfaces/login-request';
import { LoginResponse } from '../interfaces/login-response';
import { RegisterRequest } from '../interfaces/register-request';
import { CartService } from './cart.service';
import { EshopService } from './eshop.service';
import { LocalStorageService } from './local-storage.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

  constructor(
    private localStorage:LocalStorageService,
    private eshopService:EshopService,
    private notification:NotificationService,
    private cart:CartService
  ) { 
    const storedCustomer = this.localStorage.readStorage(environment.storageCustomer);
    if (storedCustomer) {
      this.eshopService.customer = JSON.parse(this.localStorage.readStorage(environment.storageCustomer));
      this.cart.getCartOfCustomer(this.eshopService.customer);

      const storedUser:LoginResponse = JSON.parse(this.localStorage.readStorage(environment.storageUser));

      if (this.helper.isTokenExpired(storedUser.accessToken)) {
        this.eshopService.customer = undefined!;
        this.eshopService.user = undefined!;
        this.eshopService.userAuthorized = false;

        this.localStorage.saveStorage(environment.storageCustomer, JSON.stringify(this.eshopService.customer));
        this.localStorage.saveStorage(environment.storageUser, JSON.stringify(this.eshopService.user));

        this.notification.showAutoCloseAlert('Autorización', 'Su sesión ha expirado');
      } else {
        const decodedToken = this.helper.decodeToken(storedUser.accessToken);
        if (decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin') {
          this.eshopService.userAuthorized = true;        
        } else {
          this.eshopService.userAuthorized = false;        
        }  
      }
      // console.log(this.eshopService.user);          
    }
  }

  logIn(login: LoginRequest) {
    this.eshopService.logInCustomer(login).subscribe((response:CustomerResponse) => {
      this.localStorage.saveStorage(environment.storageCustomer, JSON.stringify(response));
      this.eshopService.customer = response;
      this.cart.getCartOfCustomer(this.eshopService.customer);
    });
    this.eshopService.logInUser(login).subscribe((response:LoginResponse) => {
      this.localStorage.saveStorage(environment.storageUser, JSON.stringify(response));
      this.eshopService.user = response;
      const decodedToken = this.helper.decodeToken(response.accessToken);
      if (decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin') {
        this.eshopService.userAuthorized = true;        
      } else {
        this.eshopService.userAuthorized = false;        
      }

      this.notification.showAutoCloseAlert('Bienvenido', this.eshopService.customer.firstName);
    },
    (error:any) => {
      this.notification.showAutoCloseAlert('Error', error.error.message);
    }
    );
  }    

  logOut():void {
    this.eshopService.customer = undefined!;
    this.eshopService.user = undefined!;
    this.localStorage.deleteStorage(environment.storageCustomer);
    this.localStorage.deleteStorage(environment.storageUser);
  }

  signIn(register: RegisterRequest):void {
    this.eshopService.signInCustomer(register).subscribe(response => {
      this.logIn({email:register.email, password:register.password});
    });
  }
}
