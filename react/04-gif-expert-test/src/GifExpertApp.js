import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


// const GifExpertApp = () => {
    
const GifExpertApp = () => {
    //Esto no sirve porque no permite cambiar porque es una constante
    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];

    //Snippet -> useState
    // const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball']);

    // Dejar solo una categoría para empezar a obtener los gifs desde el api
    const [categories, setCategories] = useState(['Saint Seiya']);


    // Tarea 1
        // Agregar un botón para aumentar categorías
        // Crear una función para procesar el evento click
        // Agregar un elemento estático al arreglo
        // Se debe presentar inmediatamente la nueva categoría

    // Quitamos porque se va a utilizar AddCategory
    // const handleAdd = () => {
    //     // No funciona pero no presenta ni warnings ni errores, el clg si presenta los cambios pero no se renderizan a pesar de ser un const ya que react no sabe que hubieron cambios
    //     // categories.push('Saint Seiya');
    //     // console.log(categories);

    //     // Esto da un error porque categories es un array y de esta forma lo convertimos en un string con el texto Saint Seiya, JS no se hace problema por cambios de tipos de datos pero al intentar un map() de un string salta el error
    //     // setCategories('Saint Seiya');

    //     // Forma larga: sacando una copia y agregándole el elemento dado que categorías es inmutable
    //     // let categoriesCopy = [...categories];
    //     // categoriesCopy.push('Saint Seiya');
    //     // setCategories(categoriesCopy);

    //     //Forma corta: destructurando categories y agregando el elemento, utilizar el setState forza la renderización
    //     // setCategories([...categories, 'Saint Seiya']);

    //     //En caso de querer una pila. Si se deja con el setCategories anterior solo toma en cuenta el último porque setCategories actualiza con la rederización
    //     // setCategories(['Saint Seiya', ...categories]);

    //     // También se puede usar un callback, función que puede recibir útil más adelante
    //     //En todos los casos solo funciona correctamente con el primer click porque luego da error porque se repite el key ya que es el mismo nombre de la categoría
    //     setCategories(categs => [...categs, 'Saint Seiya']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            {/* Para agregar el componente y visualizarlo, luego servirá para la tarea 3 */}
            {/* <AddCategory /> */}

            {/* Para poder agregar los elementos desde el componente hijo se envía como prop la función que se quiere ejecutar con el evento */}
            <AddCategory setCategories={ setCategories }/>

            <hr />

            {/* Reemplazar por el nuevo AddCategory */}
            {/* <button onClick={ handleAdd }>Agregar categoría</button> */}

            {/* Presenta todo junto pero por consola se ve que están separados */}
            {/* { categories } */}

            <ol>
                {/* No funciona porque entre {} se espera una expresión, un valor; el for es un ciclo y no es aceptado
                { for (category in categories) {<li>category</li>}} */}

                {/* El map devuelve un valor final renderizable directamente pero presenta un error por falta de key o identificador único*/}
                {/* { categories.map(category => <li>{category}</li>) } */}

                {/* Para solventar el problema se agrega el index como key pero no es recomendable porque si se agregan o eliminan elementos los keys se verán afectados */}
                {/* { categories.map((category, idx) => <li key={idx}>{category}</li>) } */}

                {/* Se puede utilizar el propio item como key */}
                {/* Dado que el key debe ser único no se podrían repetir elementos, en la mayoría de casos esta información viene de la base de datos y lo que se presentaría sería el id del elemento y su valor. Ej. { categories.map(category => <li key={category.id}>{category.name}</li>) }, así nunca se repetirían */}
                {/* { categories.map(category => <li key={category}>{category}</li>) } */}

                {/* Reemplazamos el li con el nuevo componente GifGrid */}
                { categories.map(category => 
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                ) }
            </ol>
        </>
    )
}

export default GifExpertApp;
