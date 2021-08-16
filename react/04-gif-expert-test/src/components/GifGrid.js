import React from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { loading, data:images } = useFetchImages(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
            {
                    images.map((image) => {
                        if (!image.title) {
                            return '';
                        }
                        return (
                            <GifGridItem 
                                key={image.id}
                                {...image}
                            />
                        );                    
                    })
                }
            </div>
        </>
    )
}

// Agregar propTypes para obligar que se envie category
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

// Tarea 1
// Crear una prueba unitaria para evaluar el estado inicial del componente comparando con el snapshot