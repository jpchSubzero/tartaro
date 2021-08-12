//Snippet -> rafc
import React, { useState } from 'react';

import { PropTypes } from 'prop-types';


//UpperCamelCase (más conocido como PascalCase) para saber que es un componente
// export const AddCategory = () => {

// Recibir función desde el padre y con destructuración asignarle el nombre
export const AddCategory = ({ setCategories }) => {

    // Tarea 2
    //     Recibir la función de agregar categoría
    //     Agregar una categoría al presionar enter

    // Tarea 3
    // Agregar propTypes para requerir la función desde el padre
    // Validar el error cuando no se envía

    //Quitamos el valor inicial, esto dará un error nuevo en consola porque inputValue va a ser undefined y se necesita un valor en <input ... value={inputValue} ... />>
    // const [inputValue, setInputValue] = useState('Valor inicial');

    // Para mostrar el error de valor undefined
    // const [inputValue, setInputValue] = useState();

    // Para corregir el error de undefined que es lo mismo que se hacia en angular, dar un valor inicial
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // Para visualizar el value desde el target del evento
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    // Para manejar presionar enter
    const handleSubmit = (e) => {
        // Para prevenir el comportamiento por defecto del evento
        e.preventDefault();

        console.log('Submit');

        //Invocar la función recibida desde el padre y utilizarla a través del callback porque no tenemos acceso a categories, se puede recibir también las categories pero gracias al callback podemos pedirlas
        // setCategories(categs => [...categs, inputValue]);

        // Agregar validaciones porque acepta vacíos. Mínimo 2 para que no pierda el tiempo con una letra.
        if (inputValue.trim().length > 2) {
            // Quitar agregar al final para que se vayan agregando al inicio
            // setCategories(categs => [...categs, inputValue]);            

            // Quitar agregar al final para que se vayan agregando al inicio
            setCategories(categs => [inputValue, ...categs]);            

            setInputValue('');
        }
    }

    return (
        // Quitamos <> porque forms ya engloba todos los demás tags
        // <>

        // Agregamos form para poder utilizar el evento submit
        <form onSubmit={ handleSubmit }>
            {/* Para verificar el componente, como AddCategory works!!! en angular */}
            {/* <h2>AddCategory</h2> */}

            {/* Agregar para mostrar el valor */}
            <h1>{ inputValue }</h1>

            {/* Agregar CSS si se quiere */}
            <input 
                type="text" 
                // Produce un error ya que quieres editar un valor inmutable (inputValue)
                value={inputValue}
                // Quita el error pero aún no es editable, debemos crear un manejador para ese evento y allí actualizarlo con el useState (setInputValue)
                // onChange={ (e) => console.log(e) }

                // El evento llama a handleInputChange para actualizar, como es solo una instrucción y recibe e de evento no es necesaria la expresión lambda
                onChange={ handleInputChange }

                // Agregar placeholder después de quitar el valor por defecto
                placeholder="Ingrese una categoría"
            />
        </form>
        // </>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}