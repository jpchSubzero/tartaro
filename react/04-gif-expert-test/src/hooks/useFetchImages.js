import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

//Snippet => rafc y luego borrar el import porque no se necesita react para JSX y quitar el return
// export const useFetchImages = () => {

//Recibir la categoría
export const useFetchImages = (category) => {
        //Se usa state porque el hook no sabe para que va a trabajar y por convención se usa state en lugar de otro nombre de variable
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Agregar el setTimeout para mostrar como cambia el mensaje cargado
    // setTimeout( () =>  {
    //     setState({
    //         data: [1,2,3,4,5,6],
    //         loading: false    
    //     });
    // }, 3000);

    // Comentar el setTimeout
    //Agergar el useEffect para controlar que solo se ejecute cuando queremos, en esta ocasión cuando cambia la categoría
    //Los useEffect no pueden ser async, siempre esperan un valor síncrono
    useEffect(() => {

            getGifs(category).then(resolve => {

                //Agregarmos el setTimeout solo para ver como se ejecuta
                //Comentar al final y solo hacer el useState
                // setTimeout( () =>  {
                //     console.log(resolve);
                //     setState({
                //         data: resolve,
                //         loading: false
                //     });
                // }, 3000);

                setState({
                    data: resolve,
                    loading: false
                });

            });
    }, [category]);


    return state;
}
