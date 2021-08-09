import React from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
import { GifGridItem } from './GifGridItem';

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
