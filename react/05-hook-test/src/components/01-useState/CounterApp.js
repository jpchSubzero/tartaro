import React, { useState } from 'react';
// Agregar css
import './counter.css';

export const CounterApp = () => {

    // Crear el useState
    // const [counter, setCounter] = useState(10);

    // Cambiar el entero por un objeto
    // const [counter, setCounter] = useState({
    //     counter1: 10,
    //     counter2: 20
    // });

    // Desestructurar el state para no utilizar . en la referencia
    // const [{ counter1, counter2 }, setCounter] = useState({

    // Para no tener que hacer referencias a cada propiedad es mejor no destructurar en la definición del useState
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,

        // Aumentar para revisar el problema de tener muchas propiedades y la ineficiencia de código de repetirlas
        counter3: 30,
        counter4: 40,
        counter5: 50,
        counter6: 60
    });

    // Destructurar el state con las propiedades que necesitemos utilizar
    const {counter1, counter2} = state;

    return (
        <>
            {/* <h1>Counter { 0 }</h1> */}

            {/* Cambiar el dato quemado por el state */}
            {/* <h1>Counter { counter }</h1> */}

            {/* Hacer referencia a los objetos en el state */}
            {/* <h1>Counter1 { counter.counter1 }</h1>
            <h1>Counter2 { counter.counter2 }</h1> */}

            {/* Obtener desde el state destructurado */}
            <h1>Counter1 { counter1 }</h1>
            <h1>Counter2 { counter2 }</h1>

            <hr />

            {/* <button className="btn btn-primary">+1</button> */}

            {/* Implementar el evento click */}
            <button className="btn btn-primary" onClick={ () => {
                // Comentar porque ya no existe
                // setCounter(counter + 1);
                
                // Esto incrementa el counter1 pero como es una definición de estado también elimina las propiedades que no consten, es decir, counter2
                // setCounter({
                //     counter1: counter1 + 1
                // });

                // Para solucionar se puede asignar el resto de propiedades. El problema vine cuando tenemos muchas propiedades y no es óptimo el código
                // setCounter({
                //     counter1: counter1 + 1,
                //     counter2: counter2
                // });

                // Destructurar el state y solo asignar valores a las propiedades que necesitemos, de esta manera no se pierden las propiedades anteriores
                setState({
                    ...state,
                    counter1: counter1 + 1
                });                
            }}>+1</button>
        </>
    )
}

// Tarea 1
// Incrementar solo el counter 1 al hacer click en +1