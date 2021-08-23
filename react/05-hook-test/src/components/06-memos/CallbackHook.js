import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import './styles.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback((factor) => {
            setCounter(c => c + factor);
        },
        [setCounter]
    );

    useEffect(() => {
        console.log('useEffect');
    }, [increment]);

    return (
        <>
            <h1>CallbackHook</h1>  
            <hr />            

            <h2>useCallback: { counter }</h2>  

            <ShowIncrement increment={increment}/>
        </>
    )
}
