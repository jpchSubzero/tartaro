// Desde https://reactrouter.com/web/guides/quick-start copiar los imports y <Router>

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
// import MarvelScreen from "../components/marvel/MarvelScreen";
// import { Navbar } from "../components/ui/NavBar";
import DaskboardRoutes from "./DaskboardRoutes";

const AppRouter = () => {
    return (
        <Router>
        <div>
            {/* Reemplazar el <nav> del ejemplo por el NavBar que creamos */}
            {/* Quitamos el navbar para que no se presente en todas las páginas ya que eso hace que salga en el login */}
            {/* <Navbar /> */}
            <Switch>

                {/* Reemplazar las rutas por las que vamos utilizar */}
                <Route exact path="/login" component={ LoginScreen } />

                {/* <Route exact path="/" component={ MarvelScreen } /> */}

                {/* Cambiamos el componente MarvelScreen por el component que tiene las rutas una vez logueado */}
                {/* Quitamos el exact porque la idea es que si no es login nos lleve a las otras rutas de Daskboard */}
                <Route path="/" component={ DaskboardRoutes } />
            </Switch>
        </div>
      </Router>
    )
}

export default AppRouter;
