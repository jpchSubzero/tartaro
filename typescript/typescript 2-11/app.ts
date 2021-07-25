(function(){
    function saludar(nombre: string) {
        console.log('Hola ' + nombre); // Hola Logan
    }
    
    function saludarVarios(fruits: string[]) {
        console.table(fruits); // Hola Logan
        console.log(fruits); // Hola Logan
    }
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    const fruits = ["apples", "oranges", "bananas"];
    
    saludarVarios(fruits);

    saludar(wolverine.nombre);    
})();