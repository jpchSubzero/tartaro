import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
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

            <button className="btn btn-primary" onClick={() => setUser(newUser)}>Log In</button>
        </div>    
    )
}

