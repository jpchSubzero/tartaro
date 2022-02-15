import { useState } from "react";

export const useForm = <T extends Object>(inputForm: T) => {
    // Hook con el objeto quemado
    // const [form, setForm] = useState({
    //     email: 'jpch@email.com',
    //     password: 'abc123456'
    // });

    const [form, setForm] = useState(inputForm);

    const onChange = (value: string, field: keyof T) => {
        setForm({
            ...inputForm,
            // Al poner [] convierte el string en nombre del campo
            [field]: value
        });
    }

    return {
        // Destructurar para utilizar directo las propiedades
        // ...form,
        form,
        onChange
    }
}
