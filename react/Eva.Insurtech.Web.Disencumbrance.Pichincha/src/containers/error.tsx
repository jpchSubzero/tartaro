import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IRootState from '../interfaces/store/store.root.state.interface';
import { TypesRoutes } from '../types/types.routes';

export const Error = () => {
    const navigate = useNavigate();
    const { errorRegister} = useSelector((state:IRootState) => state);

    useEffect(() => {
        if (!errorRegister.code) {
            navigate(TypesRoutes.ROUTE_HOME);
        }
    }, [errorRegister]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <h1>Error</h1> 
            <h3>Code: {errorRegister.code}</h3> 
            <h3>Message: {errorRegister.message}</h3> 
            <h3>Details: {errorRegister.details}</h3> 
        </>
    );
}
