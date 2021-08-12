import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs', () => {
    //Como getGifs() devuelve una promesa (el resultado del GET) se convierte en asíncrono el test y con await la función
    // test('Debe traer 10 elementos', () => {
    test('Debe traer 10 elementos', async () => {
        // getGifs('one punch');
        const gifs = await getGifs('one punch');

        expect(gifs.length).toBe(10);
    });
    
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('');
        console.log(gifs);

        //Este api en particular devuelve un arreglo vacío [] y por eso de valida con 0, podría ser un error, una excepción, etc.
        expect(gifs.length).toBe(0);
    });
})
