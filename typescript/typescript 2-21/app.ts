(() => {
    let dineroActual = 1000;

    const retirarDinero = ( montoRetirar: number): Promise<number> => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (montoRetirar > dineroActual) {
                    reject('No hay suficientes fondos');
                } else {
                    dineroActual -= montoRetirar;
                    resolve(dineroActual);
                }
            }, 2000);
        });
    }

    retirarDinero(500)
        .then(saldo => {
            console.log(`Quedan: ${saldo} dólares`);
            retirarDinero(600)
                .then(saldo => console.log(`Quedan: ${saldo} dólares`))
                .catch(error => console.warn(error));     
            })
        .catch(console.warn); // Cuando solo se va a aplicar una función al valor de retorno

        
})();