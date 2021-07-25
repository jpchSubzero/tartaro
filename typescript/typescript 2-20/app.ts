(() => { 

    console.log('Inicia');

    const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa correcta');
        }, 2000);
    });

    const promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa correcta');
        }, 2000);
    });

    const promesa3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa correcta');
        }, 2000);
    });

    const promesa4 = (valor:number):Promise<number> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(valor * 100);
            }, 2000);    
        });
    };

    const promesa5 = (valor:number):Promise<number> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(valor);
            }, 2000);    
        });
    };

    promesa1
        .then(response => console.log(response))
        .catch(response => console.error(response));

    promesa2
        .then(response => console.log(response))
        .catch(response => console.error(response));
    
    Promise.all([
        promesa1,
        promesa2,
        promesa3
    ]).then((rows) => {
        console.log('row: ' + rows);
    }).catch((err) => {
        console.error('err: ' + err);
    });

    promesa4(50)
        .then((response:number) => {
            console.log(response);
            return response + 100;
        })
        .then((response:number) => {
            console.log(response);
            return response + 1000;
        })
        .then((response:number) => {
            console.log(response);
            return response + 10000;
        })
        .then((response:number) => {
            console.log(response);
        })
        .catch(response => console.error(response));

    const myAsync = async (): Promise<number> => {
        let response = await promesa5(50)
        response += await promesa5(100)
        return response
    }

    console.log(myAsync());
    myAsync().then((result) => console.log('async: ' + result));
    
    console.log('termina');


})();
