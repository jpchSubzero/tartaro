import React from 'react';

export const Hijo = React.memo(({ numero, incrementar }) => {
    return (
        <button
            className="btn btn-primary me-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
