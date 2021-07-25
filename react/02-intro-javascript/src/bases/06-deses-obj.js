
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { edad, clave, nombre, } = persona;
 
// console.log( nombre );
// console.log( edad );
// console.log( clave );

const usarContexto = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

//Desestructurar objeto padre
const { nombreClave, anios, latlng } = usarContexto( persona );

//Desestructurar objeto hijo (anidada)
const {latlng: { lat, lng } } = usarContexto( persona );

console.log(nombreClave, anios);
console.log( latlng );
console.log( lat, lng );