import React, { useEffect, useState } from 'react';

export const Message = () => {
    const [state, setState] = useState({x:0, y:0});
    const { x, y } = state;

    useEffect(() => {
        const date = new Date();
        const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        const mouseMove = (e) => {
            const coords = {x:e.x, y: e.y};

            console.log(time);
            console.log(coords);

            setState(coords);
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('Componente Message desmontado o finalizado');

            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h3>Nuevo mensaje</h3>
            <div class="alert alert-success" role="alert">
                { `${x}, ${y}` }
            </div>            
        </>
    )
}

