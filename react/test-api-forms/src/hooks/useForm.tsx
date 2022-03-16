import { ChangeEvent, useState } from 'react';

export function useForm<T> (initialState:T):[T, typeof handleInputChange, typeof handleReset] {
    const [values, setValues] = useState<T>(initialState);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ 
            ...values,
            [event.target.name]: event.target.value
        });        
    };

    const handleReset = () => {
        setValues(initialState);        
    };

    return [values, handleInputChange, handleReset];
}

