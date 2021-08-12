import React from 'react';

//Agregar propTypes para que envien title y url obligatoriamente
//snapshot -> impt
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {

    console.log(title);

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}

//Agregar propTypes para que envien title y url obligatoriamente
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

// Tarea 1
// Enzyme
// Enzume to json
// Test para GifGridItem
//     shallow
//     wrapper
//     wrapper .toMatchSnapshot()

// Tarea 2
// Agregar propTypes para que envien title y url obligatoriamente
// Enviar los parametros en la prueba
// Actualizar el snapshot

// Tarea 3
// Validar que el componente tenga la clase animate__fadeIn