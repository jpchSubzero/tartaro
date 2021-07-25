import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
// Cuando se definen las rutas directamente en el archivo principal de rutas
// import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
// import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
// import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';

// Cuando se definen las rutas en un archivo aparte
import { APP_USER_ROUTES } from './components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
    { 
        path: 'home', 
        component: 
        HomeComponent 
    },
    {
        path: 'user/:id',
        component: UsuarioComponent,
        // Cuando se definen las rutas directamente en el archivo principal de rutas
        // children: [
            // { path: 'new', component: UsuarioNuevoComponent },
            // { path: 'edit', component: UsuarioEditarComponent },
            // { path: 'detail', component: UsuarioDetalleComponent },
            // { path: '**', pathMatch: 'full', redirectTo: 'new' }
        // ]

        // Cuando se definen las rutas en un archivo aparte
        children: APP_USER_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
