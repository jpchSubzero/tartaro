import React from 'react';

// Importar el hook useFetch
import { useFetch } from '../../hooks/useFetch';

// Importar el hook useCounter
import { useCounter } from '../../hooks/useCounter';
import './styles.css';

export const MultipleCustomHooks = () => {
    // Invocamos el custom hook. El nombre state no es importante
    // https://breakingbadapi.com/documentation
    // const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    // console.log(state);

    // Agregar el hook de contador para ir incrementando el id de la cita. Esto se hace después de agregar el botón
    const { state: counter, increment } = useCounter(1);

    // Destructuramos el state para leer sus propiedades
    // const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

    // Cambiar el id quemado por el counter
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // No se puede leer directamente la data porque en un inicio es null ya que es una promesa, por lo tanto hay que validarla
    // data puede ser null y para utilizarla como operador lógico hay que convertirlo en boolean, para eso se utiliza !, al negar null se convierte en true pero para evitar que se evalue la segunda condición, data[0], es necesario que sea false y para eso se agrega otro !. Traducido seria: si no hay data no obtienes datos de la posición 0, es decir, ni siquiera lo intenta; si existe data obtén la data de la posición 0
    // Esto se puede revisar escribiendo en la consola
    const { author, quote } = !!data && data[0];
    console.log(author, quote);

    return (
        <>
            {/* <h1>Custom Hooks</h1>    */}

            {/* Cambiar el nombre por el API que vamos a utilizar */}
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {/* <div className="alert alert-info text-center">
                Cargando...
            </div> */}

            {/* https://getbootstrap.com/docs/5.0/content/typography/#alignment */}
            {/* <figure className="text-end">
                <blockquote className="blockquote">
                    <p>Frase</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Nombre
                </figcaption>
            </figure> */}

            {/* Agregamos la validación para presentar el loading o la cita a través de un operador ternario */}
            {
                loading ? (
                    <div className="alert alert-info text-center">
                        Cargando frase...
                    </div>
                ) : (
                    <figure className="text-end">
                        <blockquote className="blockquote">
                            {/* <p>Frase</p> */}

                            {/* Asignar la cita */}
                            <p>{ quote }</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            {/* Nombre */}

                            {/* Asignar el autor */}
                            { author }
                        </figcaption>

                        {/* Se utiliza () => increment() porque recibe un parámetro opcional y aunque no se envíe es necesario indicar que puede hacerlo */}
                        <button className="btn btn-primary" onClick={() => increment()}>Siguiente frase</button>
                    </figure>
                )
            }
        </>
    )
}
