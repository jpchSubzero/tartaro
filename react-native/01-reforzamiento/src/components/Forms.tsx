import { ChangeEvent/*, useState*/ } from "react";
import { useForm } from "../hooks/useForm";

export const Forms = () => {

    // const [form, setForm] = useState({
    //     email: 'jpch@email.com',
    //     password: 'abc123456'
    // });

    // const onChange = (value: string, field: string) => {
    //     setForm({
    //         ...form,
    //         // Al poner [] convierte el string en nombre del campo
    //         [field]: value
    //     });
    // }

    const {form, onChange} = useForm({
        email: 'jpch@email.com',
        password: 'abc123456'
    });

    return (
        <>
            <h3>Formularios</h3>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Ingrese el e-mail" 
                value={form.email} 
                onChange={(event:ChangeEvent<HTMLInputElement>) => onChange(event.target.value, "email")}
            ></input>
            <input 
                type="password" 
                className="form-control mt-2" 
                placeholder="Ingrese el password" 
                value={form.password}
                onChange={(event:ChangeEvent<HTMLInputElement>) => onChange(event.target.value, "password")}
            ></input>

            <code><pre>{JSON.stringify(form, null, 2)}</pre></code>
        </>            
    )
}
