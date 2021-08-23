import React, { useContext } from 'react';
import { UserContext } from './UserContext';


export const AboutScreen = () => {

    // 1. Como dejamos de enviar solo el valor y ahora es el state, destructuramos el objeto para tener user y setUser. En este caso solo user porque no se utiliza setUser
    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    };

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            {/* 3. Agregamos un botón para borrar el user */}
            <button className="btn btn-danger" onClick={ handleClick }>Log Out</button>

            {/* 2. Agregar el user como json */}
            <pre className="container">{ JSON.stringify(user, null, 3) }</pre>

        </div>    
    )
}
