import React from 'react';
// import { Link } from "react-router-dom";

// Quitar el Link y agregar el NavLink que sirve para detectar si esta activo o no y poder utilizar clases de estilo
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        // Definir el elemento para navegar nav y una lista de links
        // <nav>
        //     <ul>
        //         {/* Esto mostrará una lista sencilla donde estará el navbar */}
        //         {/* <li>Home</li>
        //         <li>Login</li>
        //         <li>About</li> */}

        //         {/* Esta forma funciona pero basado en petición al servidor, es decir, refresca la página */}
        //         {/* <li><a href="/">Home</a></li>
        //         <li><a href="/login">Login</a></li>
        //         <li><a href="/about">About</a></li> */}

        //         {/* Para evitar el refresh se utilzar Link del react-router-dom. Funciona como el a pero en lugar de a es Link y en lugar de href es to */}
        //         <li><Link to="/">Home</Link></li>
        //         <li><Link to="/login">Login</Link></li>
        //         <li><Link to="/about">About</Link></li>
        //     </ul>
        // </nav>

        // Una vez que funcionen los links, reemplazamos todo lo anterior por el navbar de bootstrap. Usar el dark y cambiar class por className ya que class es una palabra reservada de react
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">useContextApp</Link> */}

                {/* Utilizar NavLink y atributo activeClassName */}
                <NavLink activeClassName="active" className="navbar-brand" to="/">useContextApp</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                    <Link className="nav-link" aria-current="page" to="/about">About</Link> */}

                    {/* Utilizar NavLink y atributo activeClassName. Utilizar exact para que vaya a la ruta explicitamente y no confunda / que tiene todas. Todo esto para el link activo se puede omitir con aria-current="page" de bootstrap pero es bueno saber que link esta activo */}
                    <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                    <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                </div>
                </div>
            </div>
        </nav>            
    )
}

// Tarea 1
// Después de copiar el navbar de bootstrap y usar el tema dark, hacer que funcionen los links