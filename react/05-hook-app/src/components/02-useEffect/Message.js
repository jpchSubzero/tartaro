import React, { useEffect, useState } from 'react';

export const Message = () => {

    // Resolución tarea 1
    // Crear el state
    const [state, setState] = useState({x:0, y:0});

    // Extraer las coordenadas del state
    const { x, y } = state;

    // Crear el useEffect con snippet para revisar todas sus partes
    // useEffect(() => {
    //     // Cuerpo del efecto, que es lo que queremos que haga
    //     return () => {
    //         // Sentencias al desmontar el componente, cuando termina
    //     }
    //     // Dependencias. Que variable o componentes va a estar observando. [] solo al iniciar el componente.
    // }, [input]);

    useEffect(() => {
        console.log('Componente Message montado o inciado. ');

        // Agregar un date para mostrar que no deja de funcionar el listener
        const date = new Date();
        const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        // Escuchar los eventos del mouse en pantalla para ver sus coordenadas
        // Al escribir el nombre 123 empieza a presentar las coordenadas y el mensaje Nuevo mensaje. Al cambiar el nombre quita el mensaje pero las coordenadas se siguen mostrando porque no se ha detenido ese listener. Si se vuelve a escribir 123 se inicia un nuevo listener (habrían 2) y eso es fuga de memoria
        // window.addEventListener('mousemove', (e) => {
        //     // console.log(e);

        //     const coords = {x:e.x, y: e.y};

        //     // console.log(coords);

        //     // Agregar un date para mostrar que no deja de funcionar el listener
        //     console.log(time);
        //     console.log(coords);
        // });

        // Cambiamos la implementación del listener a una función aparte para poder controlarla y corregir el problema de la fuga de memoria
        const mouseMove = (e) => {
            const coords = {x:e.x, y: e.y};

            console.log(time);
            console.log(coords);

            // Asignar las coordenadas al state
            setState(coords);
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('Componente Message desmontado o finalizado');

            // Remover la función ligada al listener
            window.removeEventListener('mousemove', mouseMove);

        }
    }, []);

    return (
        <>
            <h3>Nuevo mensaje</h3>
            <div class="alert alert-success" role="alert">
                { `${x}, ${y}` }
            </div>            
        </>
    )
}

// Tarea 1
// Presentar las coordenadas en el html junto al mensaje