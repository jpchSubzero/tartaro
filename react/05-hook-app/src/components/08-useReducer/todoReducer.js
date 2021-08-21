export const todoReducer = (state = [], action) => {
    // ? por si no se envía action
    switch (action?.type) {
        // Acción de agregar
        case 'add':
            return [...state, action.payload];

        // Acción de eliminar una tarea
        // Esta acción no va a eliminar realmente el elemento sino a devolver una lista sin ese elemento ya que por la inmutabilidad del state no se puede/debe modificarlo
        // El payload puede ser un objeto todo y utilizar el id o directamente enviar solo el id, como no hay un tipado fuerte no importa si se utilizan otros tipos
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);

        // Manejador de cambio de estado de tarea
        case 'toggle':
            // // Forma larga
            // return state.map(todo => {
            //     if (todo.id === action.payload) {
            //         return {
            //             ...todo,
            //             done: !todo.done,
            //         };
            //     } 
            //     return todo;
            // });

            // Forma corta
            return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);


        // Acción por defecto que sería devolver el state
        default:
            return state;
    }
}
