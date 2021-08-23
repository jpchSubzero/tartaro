import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    // 1. Agregarmos la referencia al contexto con el hook useContext. Devuelve el valor asignado en el componente que se definió para almacenar, en ese caso UserContext
    // const userContext = useContext(UserContext);
    
    // 2. Como dejamos de enviar solo el valor y ahora es el state, destructuramos el objeto para tener user y setUser. En este caso solo user porque no se utiliza setUser
    const { user } = useContext(UserContext);

    console.log(user);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            {/* 3. Agregarmos un <pre> para ver los valores del user. La clase container es para que se vea mejor */}
            <pre className="container">{ JSON.stringify(user, null, 3) }</pre>
        </div>
    )
}
