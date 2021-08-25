// import { renderHook } from '@testing-library/react-hooks';

// Importar act para poder ejecutar las funciones de los hooks
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    const initialValue = 100;
    const factor = 10;

    test('Debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        console.log(result.current);

        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    // Utilizar constantes de valores globales para manejar mejor las pruebas
    // test('Debe retornar el valor enviado como parámetro', () => {
    test(`Debe retornar el valor ${initialValue}`, () => {
        // Utilizar constantes de valores globales para manejar mejor las pruebas
        // const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));

        expect(result.current.state).toBe(initialValue);
    });

    // Utilizar constantes de valores globales para manejar mejor las pruebas
    // test('Debe incrementar el valor del contador', () => {
    test(`Debe incrementar el valor del contador ${initialValue} en ${factor}`, () => {
        // const initialValue = 100;
        // const factor = 10;
        const { result } = renderHook(() => useCounter(initialValue));
        
        const { increment } = result.current;

        // Error al ejecutar
        // Warning: An update to TestComponent inside a test was not wrapped in act(...). Para solucionar hay que importar el act de la librería hooks
        // increment();

        act(() => {
            increment(factor);
        });

        expect(result.current.state).toBe(initialValue + factor);
    });

    // Utilizar constantes de valores globales para manejar mejor las pruebas
    // test('Debe decrementar el valor del contador', () => {
    test(`Debe decrementar el valor del contador ${initialValue} en ${factor}`, () => {
        // const initialValue = 100;
        // const factor = 10;
        const { result } = renderHook(() => useCounter(initialValue));
        
        const { decrement } = result.current;

        act(() => {
            decrement(factor);
        });

        expect(result.current.state).toBe(initialValue - factor);
    });    

    // Utilizar constantes de valores globales para manejar mejor las pruebas
    // test('Debe resetear el valor del contador', () => {
    test(`Debe resetear el valor del contador a ${initialValue}`, () => {
        // const initialValue = 100;
        // const factor = 10;
        const { result } = renderHook(() => useCounter(initialValue));
        
        const { decrement, increment, reset } = result.current;

        act(() => {
            decrement(factor);
            decrement(factor);
            decrement(factor);
            decrement(factor);
            decrement(factor);
            reset(factor);
        });

        expect(result.current.state).toBe(initialValue);
    });        
    
});

// Tarea 1
// Prueba para decremento
// Prueba para reset