(() => {

    interface IXmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = (xmen: any) => {
        console.log(`Enviando a: ${xmen.nombre}`);
    }

    const enviarMision1 = (xmen: { nombre: string }) => {
        console.log(`Enviando a: ${xmen.nombre}`);
    }
    
    const enviarMision2 = (xmen: IXmen) => {
        console.log(`Enviando a: ${xmen.nombre}`);
    }

    const wolverine = {
        nombre: 'Logan',
        edad: 200
    }

    const cypclops: IXmen = {
        nombre: 'Scott',
        edad: 30
    }

    enviarMision(wolverine);

    enviarMision1(wolverine);

    enviarMision2(cypclops);


})();