import React from 'react';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

// Importar componentes para el uso de router. Se puede copiar directamente de la documentación.
// https://reactrouter.com/web/guides/quick-start
// as Router es para crear un alias y no utilizar todo el nombre del componente BrowserRouter.
// Para evitar los warnings de Link es mejor quitarlo porque se lo va a utilizar en el navbar
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        // Especifica que es un router
        <Router>
            {/* Contenedor de todos los componentes que se vayan a utilizar. Es opcional */}
            <div>
                {/* 6. Agregar el NavBar después de probar las rutas manualmente */}
                <NavBar />

                {/* 7. Agregar un div container para que mejore la presentación */}
                <div className="container mt-5">
                    {/* Definir las rutas a utilizar */}
                    <Switch>
                        {/* 1. Es necesario el / en la ruta */}
                        {/* <Route path="/about" component={ AboutScreen } />
                        <Route path="/login" component={ LoginScreen } /> */}

                        {/* 2. Si lo ponemos primero siempre se va a mostrar el home porque valida por coincidencia parcial y si el path tiene / se iria al home. Para solucionar se puede ordenar los Route del más específico al más general (/user/create, /user/update, /about, /login, /user, /) o agregar el atributo exact a Route para que haga una evaluación completa de la ruta */}
                        {/* <Route path="/" component={ HomeScreen } /> */}

                        <Route exact path="/" component={ HomeScreen } />
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />

                        {/* 3. Ruta por defecto para manejar rutas que no existen y deben llevar a una por defecto, por lo general a la página de Not Found. No cambia el path del navegador */}
                        {/* Comparando con cualquiera que no exista */}
                        {/* <Route exact path='*' component={HomeScreen} /> */}

                        {/* 4. Simplemente enviar a la ruta por defecto si no encuentra las anteriores */}
                        {/* <Route component={HomeScreen} /> */}

                        {/* 5. Esta opción redirecciona a una ruta por defecto. Implica refresh pero tambien cambia el path del navegador */}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
