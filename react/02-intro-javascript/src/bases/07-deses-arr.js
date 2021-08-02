

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const usarState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

// const arr = useState( 'Goku' );
// console.log(arr[0])
// arr[1](); //Llamar a la función que está en la posición 1

const [ nombre, setNombre ] = usarState( 'Goku' );

console.log( nombre );
setNombre();





