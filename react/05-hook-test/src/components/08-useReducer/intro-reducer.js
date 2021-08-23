const initialTodos = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialTodos, action) => {
    switch (action?.type) {
        case 'add':
            return [...state, action.payload];
        default:
            break;
    }

    return state;
}

let todos = todoReducer();

const milkTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const addAction = {
    type: 'add',
    payload: milkTodo
};

todos = todoReducer(todos, addAction);

