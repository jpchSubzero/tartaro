import React, { useContext } from 'react';
import { UserContext } from './UserContext';


export const AboutScreen = () => {
    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    };

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            <button className="btn btn-danger" onClick={ handleClick }>Log Out</button>

            <pre className="container">{ JSON.stringify(user, null, 3) }</pre>

        </div>    
    )
}
