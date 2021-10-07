import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
    if (!url) {
        throw new Error('No hay url');
    }

    // Agregar useRef para validar si el componente está disponible (montado) o no
    const isMounted = useRef(true);

    // Utilizamos el useEffect para determinar si el componente sigue disponible. Si fue desmontado llama a su función de retorno y ahí es donde cambiamos el ref. Si el componente sigue montado no se llama la función
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        // Al final agregar para hacer que se presente el loading cada vez que se solicite una nueva frase
        setState({data: null, loading: true, error: null});

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // setState({
                //     loading: false,
                //     error: null,
                //     // Como el campo y la variable de la promesa se llaman data no es necesario data: data ya que js asume que se autoasigna
                //     data
                // });

                // Agregar un timeOut para el ejercicio RealExampleRef y hacer que demore en responder
                // setTimeout(() => {
                //     setState({
                //         loading: false,
                //         error: null,
                //         data
                //     });
                // }, 2000);

                // Validar si el componente está montado para devolver la información
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
