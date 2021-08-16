import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// En este componente se puede validar que existan los elementos GifExpertApp y GifGrid.
// No se puede asignar un valor al state ya que no tiene un nombre y se puede inicializar varios states. Para demostrar, copiar varias veces 
// const [categories, setCategories] = useState(['Saint Seiya']); cambiando el nombre de categories y setCategories. En la consola de react se verá que existen varios useState con valores pero no se puede identificar cual quisieramos utilizar
// Para poder probar validando el state inicial se puede agregar un valor por defecto al componente como parámetro de entrada en lugar de ser un valor fijo (quemado), así no validamos directamente el state sino sus efectos

// const GifExpertApp = () => {
const GifExpertApp = ({ defaultCategories = [] }) => {

    // Implementar categorías por defecto, esto causará el error de snapshot
    const [categories, setCategories] = useState(defaultCategories);

    // const [categories, setCategories] = useState(['Saint Seiya']);

    // const [categories1, setCategories1] = useState(['Saint Seiya']);
    // const [categories2, setCategories2] = useState(['Saint Seiya']);
    // const [categories3, setCategories3] = useState(['Saint Seiya']);

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr />

            <ol>
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

// Tarea 1
// Validar a través de snapshot