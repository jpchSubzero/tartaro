import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // Solución tarea 1
    // Leer el contexto y obtener el setUser
    const { setUser } = useContext(UserContext);

    const newUser = {
        id: 1234,
        name: 'Nombre del usuario',
        email: 'usuario@usuario.com'
    };

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            {/* Solución tarea 1
            Crear botón y cambiar el valor del user */}
            <button className="btn btn-primary" onClick={() => setUser(newUser)}>Log In</button>
        </div>    
    )
}

// Tarea 1
// - Obtener el contexto
// - Obtener el setUser
// - Agregar un botón de login que cambie el usuario
// - El objeto user puede ser de la siguiente forma:
//     {
//         id: 1234,
//         name: 'Nombre del usuario',
//         email: 'usuario@usuario.com'
//     }