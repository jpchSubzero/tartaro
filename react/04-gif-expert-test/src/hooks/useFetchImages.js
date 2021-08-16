import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

// Se puede validar que al inicio exista data vacía y loading en true. También que luego del effect exista data y loading en false.

export const useFetchImages = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
            getGifs(category).then(resolve => {
                setState({
                    data: resolve,
                    loading: false
                });

            });
    }, [category]);

    return state;
}
