// import React, { useState, useEffect } from 'react';
// import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

import React from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //Para explicar el problema de llamar el método getGifs() desde la raíz del componente. Crea un bucle al actualizar count y refrescar el componente. Se utiliza useEffect para ejecutar código en ciertos momentos
    // const [count, setCount] = useState(0);

    //El primer parámetro es una función donde va el código a ejecutar. El segundo parámetro es una lista de dependencias. 
    //[] es que solo se ejecute una vez, como el constructor
    //El warning que empezará a aparecer es porque useEffect detecta que hay el parámetro category y que podría cambiar por lo que sugiere agregarlo como dependencia para que se vuelva a ejecutar el código si category cambia, en este caso no se necesita porque la lógica no va de ese modo. En caso de necesitarse sería [category] como dependencia en el segundo parámetro
    // useEffect(() => {
    //     // Comentar para utilizar el helper getGif
    //     // getGifs();

    //     //Forma larga
    //     // getGifs(category).then((resolve, reject) => {
    //     //     setImages(resolve);
    //     // });

    //     //Forma corta porque getGifs() solo recibe un parámetro y por defecto le pasa resolve
    //     //Luego de esto comentar lo siguiente para implementar el custom hook:
    //     // - useState
    //     // - useEffect
    //     // - div
    //     // import React, { useState, useEffect } from 'react';
    //     // import { GifGridItem } from './GifGridItem';
    //     // import { getGifs } from '../helpers/getGifs';
    //     // Dejar unicamente el import del react
        //     getGifs(category).then(setImages);
    // }, []);

    // //Para manejar las imágenes y luego realizar la tarea
    // const [images, setImages] = useState([]);


    // const getGifs = () => { 

    // //Convertir en función asíncrona
    // const getGifs = async () => { 
    //     // Comentar para agregar la categoría que llega por props luego de las clases
    //     // const url = 'https://api.giphy.com/v1/gifs/search?q=saint+seiya&limit=20&offset=5&rating=g&lang=en&random_id=e826c9fc5c929e0d6c6d423841a282aa&api_key=WzZmmeMbM2fIoV97Bv3ZDXYM6pE1MDa6';

    //     // Agregar la categoría que llega por props y usar encodeURI() para sanitizar el string. También cambiar en AddCategory() para que agregue las nuevas búsquedas al inicio del arreglo
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&offset=5&rating=g&lang=en&random_id=e826c9fc5c929e0d6c6d423841a282aa&api_key=WzZmmeMbM2fIoV97Bv3ZDXYM6pE1MDa6`;

    //     //Hacer una llamada http
    //     const response = await fetch(url);

    //     //Trae toda la data con envoltorio incluido
    //     // const data = await response.json();

    //     //Destructurar para obtener la data sin envoltorio porque la estructura es obj.data
    //     const { data } = await response.json();

    //     //Usar map para recorrer la data y solo sacar lo que necesitamos
    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     });

    //     setImages(gifs);

    //     console.log(gifs);
    // }

    // Para explicar el problema de llamar el método getGifs() desde la raíz del componente.
    // getGifs();

    //Aquí llamamos al custom hook useFetchImages
    // const state = useFetchImages();
    // console.log(state);

    //Destructurar useFetchImages
    // const { loading, data } = useFetchImages();
    // console.log(loading);
    // console.log(data);

    //Agregar la categoría para que el hook sepa que buscar
    // const { loading, data } = useFetchImages(category);

    // Agregar la referencia images a data para cambiar el nombre
    const { loading, data:images } = useFetchImages(category);


    return (
        // Cambiar por el div para aplicar clases y luego volver a habilitar para poder tener el h3 y el div
        <>

        {/* <h3>{ category }</h3> */}

        {/* Agregar animación */}
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        {/* Agregar luego de llamar al custom hook useFetchImages */}
        {/* Agregar el setTimeout en el hook para mostrar como cambia el mensaje cargado */}
        {/* Quitar cuando se use la data */}
        {/* { loading ? 'Cargando...' : 'Data cargada' } */}

        {/* <div className="card-grid"> */}

            {/* Mover fuera del div para que no le afecte el estilo */}
            {/* <h3>{ category }</h3> */}

            {/* Para explicar el problema de llamar el método getGifs() desde la raíz del componente. */}
            {/* <h3>{ count }</h3>
            <button onClick={ () => setCount(count + 1) } >Click</button> */}

            {/* Tarea 4
            Una vez pasados los gifs a través del setImages llenar la lista usando el id como key y el title como valor */}

            {/* Comentar toda la lista ordenada para reemplazar con el componente GifGridItem */}
            {/* <ol> */}
                {/* <li>sfasdfasdf</li> */}
                {
                    // images.map(({id, title}) => {
                    //     if (title) {
                    //         return (<li key={ id }>{ title }</li>);
                    //     }
                    // })
                }
            {/* </ol> */}

            {
                // images.map((image) => {
                //     if (!image.title) {
                //         return '';
                //     }
                //     return (
                //         <GifGridItem 
                //             key={image.id}
                //             // image={ image } 

                //             //Para no usar en el componente props.image enviamos destructurado el objeto
                //             {...image}
                //         />
                //     );                    
                // })
            }

        {/* </div> */}

        {/* Acualizar el div con la data que llega desde el custom hook y agregar un nuevo loader */}
        {/* Este loading usa un operador lógico and y evalúa si ambas son verdaderas y así presenta el mensaje */}
        {/* { loading && <p>Cargando...</p> } */}

        {/* Agregar animación         */}
        { loading && <p className="animate__animated animate__flash">Cargando...</p> }

        <div className="card-grid">
        {
                // Cambiar de data a images mediante la referencia :images
                // data.map((image) => {
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

        {/* Cambiar por el div para aplicar clases y luego volver a habilitar*/}
        </>
    )
}
