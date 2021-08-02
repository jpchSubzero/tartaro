//Snippet -> imr
import React, { Fragment } from 'react'; 

import PropTypes from 'prop-types';

const PrimerTestApp = ({saludo, subtitulo}) => {
    
    return ( 
        <>
            <h1>{ saludo }, bienvenido</h1>
            <p>{ subtitulo }</p>
        </>
    );
}

PrimerTestApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimerTestApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimerTestApp; 