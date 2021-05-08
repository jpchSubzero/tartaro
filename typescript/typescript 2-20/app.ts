(() => {

    console.log('Inicio');

    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Se terminó timeout OK');
        }, 5000);
    });

    const prom2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Se terminó timeout FAIL');
        }, 5000);
    });

    prom1
        .then(mensaje => console.log(mensaje))
        .catch(error => console.warn(error));    
    prom2
        .then(mensaje => console.log(mensaje))
        .catch(error => console.warn(error));

    console.log('Final');

})();