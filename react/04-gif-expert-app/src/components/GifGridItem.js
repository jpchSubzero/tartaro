import React from 'react';

// export const GifGridItem = (props) => {

//Para no usar en el componente props.image enviamos destructurado el objeto
export const GifGridItem = ({id, title, url}) => {

    console.log(title);

    return (
        // <div className="card animate__animated animate__bounce">

        // Agregar animate.css
        <div className="card animate__animated animate__fadeIn">
            {/* Para revisar si llegó la imagen */}
            {/* { title } */}
            <img src={url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}
