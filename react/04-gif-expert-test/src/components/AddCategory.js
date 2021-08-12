//Snippet -> rafc
import React, { useState } from 'react';

import { PropTypes } from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

        //Agregar para prueba unitaria
        console.log('Se llamó el método handleInputChange');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Agregar para prueba unitaria
        console.log('Se llamó el método handleSubmit', inputValue);

        if (inputValue.trim().length > 2) {
            setCategories(categs => [inputValue, ...categs]);   
            // setCategories(2412341234);            
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>{ inputValue }</h1>

{/* Agregamos el <p> por pruebas unitarias */}
<p>{inputValue }</p>

            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange }
                placeholder="Ingrese una categoría"
            />
        </form>
        // </>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}