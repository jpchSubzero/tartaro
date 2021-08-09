import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

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
