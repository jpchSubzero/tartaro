// Realizar la importación normal de js en el index.js, esta parte es solo consola. Se puede comentar todo lo demás del index.

console.log('Reducers');

// Definir el estado inicial
const initialTodos = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

// Reducer básico conceptual
// const reducer = (state, action) => {
//     return state;
// }

// Definir el reducer solo con state
const todoReducer = (state = initialTodos, action) => {
    switch (action?.type) {
        case 'add':
            // Agregamos el nuevo valor a través de spread para no mutar el state
            return [...state, action.payload];
        default:
            break;
    }

    return state;
}

// Invocar el reducer
let todos = todoReducer();

// Añadir elementos de forma incorrecta. No se debe modificar directamente ya que viola la inmutabilidad. Cuando se trabaje con un state real daría un error.
// todos.push('asdfasdf');

// Crear un nuevo todo
const milkTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

// Crear la acción de agregar
const addAction = {
    // Asignar el tipo de acción para que el reducer sepa que hacer
    type: 'add',

    // Asginar el valor a procesar con el tipo de acción definido
    // milkTodo

    // Por convención se recomienda utilizar la sintaxis payload: <value> para saber que se está enviando un valor a un reducer
    payload: milkTodo
};

// Enviamos al reducer el state y la acción
todos = todoReducer(todos, addAction);

console.log(todos);