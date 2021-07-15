import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EshopService } from '../services/eshop.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {

  constructor(
    private eshopService:EshopService,
    private router:Router
  ) {

  }  
  canActivate(): boolean {
    if (this.eshopService.userAuthorized) {
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
  
}
