import React from 'react';
import AppRouter from './routers/AppRouter';

const HeroesApp = () => {
    return (
        // <div>
        //     <h1>Heroes App</h1>
        // </div>

        // Agregamos el AppRouter que contiene el navbar desde el componente que creamos
        // Probamos que funcione 
        // En el caso de login no debería presentar la barra ya que la idea es que la barra se presente luego de login
        // Creamos un nuevo componente de rutas DaskboardRoutes que manejará las rutas despues de loguear
        <AppRouter />
    )
}

export default HeroesApp;
