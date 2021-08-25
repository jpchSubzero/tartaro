import { useFetch } from "../../hooks/useFetch";
import { renderHook } from "@testing-library/react-hooks";


describe('Pruebas en useFetch', () => {
    test('Debe retornar la información por defecto', () => {
        const counter = 1;
        const { result } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`));

        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    // Agregar async porque necesitamos esperar la promesa con await
    test('Debe tener la info solicitada, loading en false y error en null', async() => {
        const counter = 1;

        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`));
        
        // Agregar un tiempo de espera de 3500 ya que el hook tiene un setTimeOut de 2000
        await waitForNextUpdate({timeout: 3500});

        const {data, loading, error} = result.current;

        // Se espera 1 porque devuelve siempre una sola frase
        expect(data.length).toBe(1);
        expect(data.quote_id).not.toBe(counter);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });
    
    test('Debe presentar un error', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://reqres.in/apiIncorrecta/users?page=2`));
        
        await waitForNextUpdate({timeout: 3500});

        const {data, loading, error} = result.current;

        console.log(error);

        expect(error).not.toBe(null);
        expect(error.startsWith('Error al llamar al API: ')).toBe(true);
        expect(data).toBe(null);
        expect(loading).toBe(false);

    });
    
})
