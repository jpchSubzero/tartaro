//Functional components
import React, { Fragment } from 'react'; //imr -> tab

//Importar para utilizar validaciones basadas en proptypes
import PropTypes from 'prop-types';

//Definición sin parámetros (props)
// const PrimeraApp = () => {

//Definición con props
// const PrimeraApp = (props) => {

//Definición con props desestructurada, se corre el riesgo de que no lleguen valores
const PrimeraApp = ({nombreProps, apellidoProps, edadProps}) => {
    
//Definición con props desestructurada con valores por defecto para prevenir errores o undefined (manera 1)
// const PrimeraApp = ({nombreProps='Sin nombre', apellidoProps='Sin apellido', edadProps='Sin edad'}) => {

    const nombre:string = 'Juan Pablo Correa';
    const edad:number = 42;
    
    // No imprime boleanos, presenta vacío
    const hombre:boolean = true;
    const gustos:string[] = ['Películas', 'Juegos', 'Desarrollo', 'Dormir', 'Pereza', 'Comer'];

    // No imprime undefined, presenta vacío
    const indefinido:string = undefined;

    // No imprime objetos directamente, da error
    const direccion = {
        principal: 'Bernardo Valdivieso',
        secundaria: 'Quito',
        numero: '191-22',
        referencia: 'Isla de parqueo'
    }
    
    //Desestructurar objeto props
    // props = {
    //     "nombreProps": "Juan Manuel",
    //     "apellidoProps": "Correa Lomas",
    //     "edadProps": "12"
    //  }
    // const {nombreProps, apellidoProps, edadProps} = {...props};
    // console.log(props);

    // No se debe dar un enter ya que js asume que ahí va un ; e ignora el resto
    // return 
    //     <h1>Hola mundo desde componente</h1>;

    // Se puede omitir los paréntesis pero puede causar resultados inesperados por el ;
    // return <h1>Hola mundo desde componente</h1>; 

    // return (<h1>Hola mundo desde componente</h1>);

    // Solo se puede retornar un elemento HTML, los parentesis no sirven para pasar varios tags
    // return ( 
    //     <h1>Hola mundo desde componente</h1>
    //     <h3>Segunda línea</h3>
    // );

    // Se puede englobar en un contenedor pero esto genera etiquetas innecesarias
    // return ( 
    //     <div>
    //         <h1>Hola mundo desde componente</h1>
    //         <hr />
    //         <h3>Segunda línea</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur</p>
    //     </div>
    // );

    // Se puede englobar en <Fragment>, no renderiza la etiqueta pero es un código más largo
    // return ( 
    //     <Fragment>
    //         <h1>Hola mundo desde componente</h1>
    //         <hr />
    //         <h3>Segunda línea</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur</p>
    //     </Fragment>
    // );

    // Se puede englobar en <> sin etiqueta (al renderizar se convierte en Fragment) para no generar etiquetas innecesarias, código más limpio
    // return ( 
    //     <>
    //         <h1>Hola mundo desde componente</h1>
    //         <hr />
    //         <h3>Segunda línea</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur</p>
    //     </>
    // );

    // // Validar propiedad y lanzar un error pero consume mucha memoria
    // if (!nombreProps) {
    //     throw new Error('Debe enviar un nombre');
    // }

    // // Validar propiedad y lanzar un error pero consume mucha memoria
    // if (!apellidoProps) {
    //     throw new Error('Debe enviar un apellido');
    // }

    // // Validar propiedad y lanzar un error pero consume mucha memoria
    // if (!edadProps) {
    //     throw new Error('Debe enviar una edad');
    // }

    // Se utilizan las llaves para interpolación de texto
    return ( 
        <>
            <h1>Hola mundo desde componente</h1>
            <hr />
            <h3>Saludos, {nombre}</h3>
            <h4>Tienes {edad} años</h4>
            <h5>¿Hombre? {hombre}</h5>
            <h5>Gustos: {gustos}</h5>
            <h5>Sin definir: {indefinido}</h5>

            {/* <h5>Dirección: {direccion}</h5> */}
            
            {/* Se puede usar stringify */}
            <h5>Dirección: <pre>{JSON.stringify(direccion)}</pre></h5>

            {/* Se puede usar stringify con parámetros */}
            <h5>Dirección: <pre>{JSON.stringify(direccion, null, 3)}</pre></h5>
            <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur</p>

            <p>NombreProps: {nombreProps}</p>
            <p>ApellidoProps: {apellidoProps}</p>
            <p>EdadProps: {edadProps}</p>
        </>
    );
}

// Para definir el tipo de datos que debe recibir el componente, si es requerido, esto no produce un error sino un warning para advertir de la necesidad
PrimeraApp.propTypes = {
    nombreProps: PropTypes.string.isRequired, 
    apellidoProps: PropTypes.string.isRequired, 
    edadProps: PropTypes.number
}

//Definición con props desestructurada con valores por defecto para prevenir errores o undefined (manera 2)
PrimeraApp.defaultProps = {
    nombreProps: 'Sin nombre', 
    apellidoProps: 'Sin apellido', 
    edadProps: -1
}

//Snippet -> exp
export default PrimeraApp; 