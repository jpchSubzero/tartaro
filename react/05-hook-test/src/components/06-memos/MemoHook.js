import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';
import './styles.css';

export const MemoHook = () => {
    const {state, increment} = useCounter(5000);
    const [show, setShow] = useState(true);
    const memoHeavyProcess = useMemo(() => heavyProcess(state), [state]);

    return (
        <>
            <h1>Memorize</h1>  
            <h2>Counter: <small>{state}</small></h2>  

            <hr />

            <p>{ memoHeavyProcess }</p>

            <button onClick={() => increment()} className="btn btn-primary me-3">+1</button>
            <button onClick={() => setShow(!show)} className={ show ? 'btn btn-secondary' : 'btn btn-success' }>{ show ? 'Ocultar' : 'Mostrar' }</button>
        </>
    )
}
