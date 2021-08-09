import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import GifExpertApp from './GifExpertApp';

//O no se necesitan o eliminamos, solo quedar index, su css y setupTests
// import App from './App';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  // Especificar el modo extricto que por ahora causa más problema pero luego se utilizará
  // <React.StrictMode>
    <GifExpertApp />,
  // </React.StrictMode>,
  document.getElementById('root')
);

//No se va a utilizar
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Tarea: 
  // Crear el componente GifExpertApp
  // Su nombre como título en un h2
  // Una línea divisoria
  // Agregar en el index