import { useEffect, useReducer } from "react";

interface AuthState {
    validating: boolean;
    token: string | null;
    userName: string;
    name: string;

}

const initialState:AuthState = {
    validating: true,
    token: null,
    userName: '',
    name: ''
}

type LoginPayload = {
    userName: string;
    name: string;
}

type AuthAction = { type: 'logout' } | { type: 'login', payload: LoginPayload}

// Definir el reducer sin crear la interface del tipo de dato
// const authReducer = (): typeof initialState => {

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'login':
            const {name, userName} = action.payload;
            return {
                validating: false,
                token: 'sdfa-dfasdfa-sdfasdf-sdfdfd',
                userName,
                name
            }
        case 'logout':
            return {
                validating: false,
                token: null,
                userName: '',
                name: ''            
            }
        default:
            return state;
    }
}

export const Login = () => {

    // Sin desestructuración para invocar propiedades a través de declaración de objeto
    // const [state, dispatch] = useReducer(authReducer, initialState);
    const [{validating, token, name}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type:'logout'});
        }, 1500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login', 
            payload: {
                name: 'Juan Pablo', 
                userName: 'jpch'
            }
        });
    }
    
    const logout = () => {
        dispatch({
            type: 'logout'
        });
    }
    
    // Invocar propiedades a través de declaración de objeto
    // if (state.validating) {
    if (validating) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>            
        );
    }
    
    return (
        <>
            <h3>Login</h3>
            {
                (token) 
                ? <div className="alert alert-success">Autenticado como {name}</div> 
                : <div className="alert alert-danger">No autenticado</div>
            }
            
            {
                (token) 
                ? <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={logout}
                >Logout</button>
                : <button 
                    type="button" 
                    className="btn btn-primary me-2" 
                    onClick={login}
                >Login</button>
            }

            
            
        </>
    )
}
