import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
    if (!url) {
        throw new Error('No hay url');
    }

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        setState({data: null, loading: true, error: null});

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });                        
                    }
                }, 2000);

            });
    }, [url]);

    return state;
}
