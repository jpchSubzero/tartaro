import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log('Esta autenticado: ' + this.auth.isAutenticated());
    if (!this.auth.isAutenticated()) {
      this.salir();      
    }
  }

  salir() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}
