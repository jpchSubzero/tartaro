//Importar el hook useState para manejar el estado
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Snippet -> rafce función con exportación default
//Snippet -> rafcp función con exportación default y propTypes
//Snippet -> rafc función con exportación definida
//Eventos sintéticos (SyntheticEvent) https://es.reactjs.org/docs/events.html
// const CounterApp = ({value}) => {

//Poner un valor por defecto para que funcione siempre
const CounterApp = ({value=0}) => {

    //Desestructurar la respuesta de useState que es una variable y una función, por convención se utiliza [<Variable>, set<Variable>]. <Variable> es inmutable aunque usemos let en lugar de const
    const [valor, setValor] = useState(value);

    //Por convención se utiliza handle como prefijo en una función que maneja un evento
    const handleAdd = () => {
        //No se puede utilizar ++ porque los valores de estado son inmutables y no pueden modificarse directamente
        // valor++;
        // setValor(valor++);

        //Para modificar se utilizar la función definida en el hook (setValor) y un nuevo valor
        setValor(valor + 1);

        //Si no se tuviera acceso a <Variable> se puede modificar a través de una función anónima porque set<Variable> sabe que esta ligada a <Variable> y se puede recibir como parámetro y luego incrementarla
        // setValor((c) => c + 1);

        // console.log(valor);
    }

    // //Ejemplo recibiendo el evento como parámetro
    // const handleAdd = (e) => {
    //     value++;
    //     console.log(value);
    // }

    //Ejemplo de función que devuelve una función
    // const handleAdd1 = () => {
    //     return () => console.log('Respuesta como función');
    // }

    //#region Tarea 2
    //Crear método para reducir contador en 1, otro para resetear al value que llegó y definirle un valor por defecto en caso de que no llegue un value por parámetro

    //Función resumida porque tiene una sola instrucción
    const handleSubstract = () => setValor(valor - 1);
    
    //Función resumida porque tiene una sola instrucción
    const handleReset = () => setValor(value);

    //#endregion

    return (
        <>
            <h1>CounterApp</h1>
            
            {/* Mostrar el valor que llega como parámetro */}
            {/* <h2> { value } </h2>   
             */}

             {/* Mostrar el valor como estado del componente que se puede modificar con setValor creado con el hook useState */}
            <h2> { valor } </h2>   
            
            {/* Mostrar el detalle del evento */}
            {/* <button onClick={ (e) => { console.log(e) } }>+1</button> */}
            
            {/* Invocar una función a través de un evento, forma larga */}
            {/* <button onClick={ (e) => handleAdd(e) }>+1</button> */}
            
            {/* Invocar una función a través de un evento, forma corta basada en que JS asume que la función que recibe un parámetro (e) lo pasa como parámetro a la función que contiene (handleAdd)*/}
            <button onClick={ handleAdd }>+1</button>
            
            {/* No debe invocarse con (), handleAdd(), porque react la ejecuta sin necesidad del botón, como si fuera una instrucción. Se necesita cuando la función no devuelve un valor sino otra función*/}
            {/* <button onClick={ handleAdd1() }>+1</button> */}

             {/* Tarea 2 */}
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>

        </>
    );
}

CounterApp.propTypes = {
    value:PropTypes.number
}

export default CounterApp;