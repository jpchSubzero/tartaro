import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en hook useForms', () => {
    const initialValue = {
        name: 'Nombre',
        email: 'email@email.com',
        password: 'initialPassword'
    };

    test('Debe regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialValue));

        // Usando posiciones del arreglo
        // console.log(result.current[0]);
        // expect(result.current[0]).toEqual(initialValue);
        // expect(typeof result.current[1]).toBe('function');
        // expect(typeof result.current[2]).toBe('function');

        // Destructurando arreglo
        const [values, handleInputChange, handleReset] = result.current;
        console.log(values);
        expect(values).toEqual(initialValue);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof handleReset).toBe('function');
    });

    test('Debe cambiar el valor del formulario (campo name)', () => {
        const { result } = renderHook(() => useForm(initialValue));

        // Usando posiciones del arreglo
        // const handleInputChange = result.current[1];

        // console.log(handleInputChange);
        // console.log(result.current[0]);
        
        // act(() => {
        //     handleInputChange({
        //         target: {
        //             name: 'name',
        //             value: 'Nuevo nombre'
        //         }
        //     });
        // });        

        // expect(result.current[0]).not.toEqual(initialValue);
        // expect(result.current[0]).toEqual({...initialValue, name: 'Nuevo nombre'});
        
        // Destructurando arreglo
        const [, handleInputChange] = result.current;

        console.log(handleInputChange);

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Nuevo nombre'
                }
            });
        });        

        const [values] = result.current;
        
        console.log(values);

        expect(values).not.toEqual(initialValue);
        expect(values).toEqual({...initialValue, name: 'Nuevo nombre'});
    });

    test('Debe restablecer el formulario a su estado inicial', () => {
        const { result } = renderHook(() => useForm(initialValue));

        // Usando posiciones del arreglo
        // const handleInputChange = result.current[1];
        // const handleReset = result.current[2];

        // console.log(result.current[0]);

        // act(() => {
        //     handleInputChange({
        //         target: {
        //             name: 'name',
        //             value: 'Nuevo nombre'
        //         }
        //     });
        //     handleInputChange({
        //         target: {
        //             name: 'email',
        //             value: 'nuevoemail@email.com'
        //         }
        //     });
        //     handleReset();
        // });        

        // console.log(result.current[0]);

        // expect(result.current[0]).toEqual(initialValue);

        // Destructurando arreglo
        const [, handleInputChange, handleReset] = result.current;

        console.log(handleInputChange);
        console.log(handleReset);

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Nuevo nombre'
                }
            });
            handleInputChange({
                target: {
                    name: 'email',
                    value: 'nuevoemail@email.com'
                }
            });
            handleReset();
        });        

        const [values] = result.current;
        
        console.log(values);

        expect(values).toEqual(initialValue);
        
    });
    
})

// Tarea 1
// Crear los 3 tests definidos