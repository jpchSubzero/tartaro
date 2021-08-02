import React  from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import PrimerTestApp from './PrimerTestApp';

import './index.css'; //Importar CSS

console.log('Hola mundo');

const saludo = <h1>Hola mundo</h1>;
const divRoot = document.querySelector('#root');

console.log(saludo);
console.log(divRoot);

//Renderización de html directo
// ReactDOM.render(saludo, divRoot); 

//Renderización desde componente, sobreescribe el render anterior porque apunta al mismo elemento 'root'
// ReactDOM.render(<PrimeraApp />, divRoot); 

//Renderización desde componente enviando props
// ReactDOM.render(<PrimeraApp nombreProps='Juan Manuel' apellidoProps='Correa Lomas' edadProps={12}/>, divRoot); 

//Renderización desde componente sin enviar props para usar valores por defecto (manera 1 y 2)
// ReactDOM.render(<PrimeraApp />, divRoot); 

//Renderización desde componente enviando props pero con el valor de edadProps de tipo string y espara number por lo que da un warning, si no se envían ya no da error sino un warning por el propTypes
// ReactDOM.render(<PrimeraApp nombreProps='Juan Manuel' apellidoProps='Correa Lomas' edadProps='12'/>, divRoot); 

//Tarea (Tarea.md)
// ReactDOM.render(<CounterApp value={10} />, divRoot); 

//Test
ReactDOM.render(<PrimerTestApp />, divRoot); 

//Tarea
// Validar CounterApp por snapshot y valores por defecto
// Validar CounterApp enviando 100 y verificando el elemento HTML correspondiente
ReactDOM.render(<CounterApp value={10} />, divRoot); 




