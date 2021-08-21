import React from 'react';
import ReactDOM from 'react-dom';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { LayoutEffect } from './components/05-useLayerEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';

// Tarea final
// Falta importar en el padre el estilo
// import { Padre } from './components/07-tarea-memo/Padre';

// Importaciones común y corriente para empezar a trabajar con reducers
// import './components/08-useReducer/intro-reducer';
import { TodoApp } from './components/08-useReducer/TodoApp';

ReactDOM.render(
  // <HookApp />,
  // <CounterApp />,
  // <CounterWithCustomHook />,
  // <SimpleForm />,
  // <FormWithCustomHook />,
  // <MultipleCustomHooks />,
  // <FocusScreen />,
  // <RealExampleRef />,
  // <LayoutEffect />,
  // <Memorize />,
  // <MemoHook />,
  // <CallbackHook />,

  // Tarea final
  // <Padre />,

  // Inicio reducers
  <TodoApp />,
  document.getElementById('root')
);

