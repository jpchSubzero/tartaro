import { Routes } from '@angular/router';

import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

export const APP_USER_ROUTES: Routes = [
    { path: 'new', component: UsuarioNuevoComponent },
    { path: 'edit', component: UsuarioEditarComponent },
    { path: 'detail', component: UsuarioDetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'new' }
];

