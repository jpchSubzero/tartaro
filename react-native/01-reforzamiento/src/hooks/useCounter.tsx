import { useState } from "react";

export const useCounter = (init: number = 10) => {
    const [value, setValue] = useState(init);

    const increase = (newValue: number) => {
        setValue(value + newValue);
    }

    return {
        // Para especificar otro nombre de variable de retorno
        // value: value
        value,
        increase
    }
}
