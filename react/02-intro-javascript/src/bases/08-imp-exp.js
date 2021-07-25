// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
//Va sin llaves cuando está exportado por defecto y con llaves cuando no es por defecto
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );



//Exportado para el ejercicio de las promesas
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
//Exportado para el ejercicio de las promesas
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


