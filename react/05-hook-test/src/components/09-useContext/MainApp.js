import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    // 3. Agregamos el objeto/información a compartir
    // const user = {
    //     id: 1234,
    //     name: 'Nombre del usuario',
    //     email: 'usuario@usuario.com'
    // }

    // 5. Reemplazamos el objeto por el state. COmo estabamos enviando user y el state tiene el mismo nombre app va a seguir igual solo que con un objeto vacío
    const [user, setUser] = useState({});

    return (
        // <div>
        //     <h1>MainApp</h1>
        //     <hr />
        //     <AppRouter />
        // </div>    

        // 1. Podemos dejar solo el AppRouter ya que es quien renderizará lo que se vaya pidiendo
        // <AppRouter />

        // 2. Utilizar el contexto creado para manejar la comunicación entre componentes que estan al mismo nivel. Al revisar en la consola de react se ve una estructura mucho más compleja que antes
        // <UserContext.Provider>
        //     <AppRouter />
        // </UserContext.Provider>

        // 4. Enviamos la información a través del atributo value. Al reviasr en consola se ve que ya tiene la prop el contexto
        // <UserContext.Provider value={ user }>

        // 6. Enviamos tanto el valor como la función en un objeto nuevo, { user, setUser }. Como usamos los mismo nombres se omite : { user:user, setUser:setUser }
        <UserContext.Provider value={ { user, setUser } }>
            <AppRouter />
        </UserContext.Provider>
    )
}
