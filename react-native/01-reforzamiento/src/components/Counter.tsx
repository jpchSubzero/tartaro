import { useState } from "react";

export const Counter = () => {

    // Para trabajar con genérios
    // const [value, setValue] = useState<number>(0);

    const [value, setValue] = useState(0);

    const increase = (newValue: number) => {
        setValue(value + newValue);
    }

    return (
        <>
            <h3>Contador: <small>{value}</small></h3>
            <button className="btn btn-primary me-2" onClick={() => increase(1)}>+1</button>
            <button className="btn btn-primary" onClick={() => increase(-1)}>-1</button>
        </>
    )
}