const heroes = [
// export const heroes = [ //Exportanción básica con nombre de referencia
// export default [ //Exportación por defecto sin usar un nombre de referencia
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owners = ['DC','Marvel']; //Exportación de adicional que ya no es por defecto

export default heroes;//Exportación por defecto dejando un nombre de referencia del objeto

//Exportar todo en un solo export, se puede definir cual es por defecto
// export {
//     heroes as default,
//     owners
// }