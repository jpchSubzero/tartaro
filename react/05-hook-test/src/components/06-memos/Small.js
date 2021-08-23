// import React from 'react';

// export const Small = ({value}) => {
//     console.log('Small renderizado');
//     return (
//         <>
//             <small>{ value }</small>
//         </>
//     )
// }

// // Forma 1
// // Agregar memo para memorizar
// import React, { memo } from 'react';

// // Englobar toda la función del componente en memo(). Esto causa que el componente valide si cambiaron sus propiedades y solo se renderiza si hay cambios.
// export const Small = memo(({value}) => {
//     console.log('Small renderizado');
//     return (
//         <>
//             <small>{ value }</small>
//         </>
//     )
// })

// Forma 2
import React from 'react';

// Englobar toda la función del componente en React.memo(). Esta forma omite la importación de memo.
export const Small = React.memo(({value}) => {
    console.log('Small renderizado');
    return (
        <>
            <small>{ value }</small>
        </>
    )
})
