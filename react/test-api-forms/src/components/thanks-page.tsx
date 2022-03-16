import React from 'react'
import { useSelector } from 'react-redux';
import { downloadHandler } from '../services/UtilitiesService';
import IRootState from '../store/store';


export const Thanks = () => {

    const { person, integration } = useSelector((state:IRootState) => state);
    


    const renderComponent = () => { 
        return (
          <>
            {
                <div>
                    <p><strong>Cliente: </strong>{person.fullName}</p>
                    <p><strong>Email: </strong>{person.email}</p>
                    <button onClick={() => downloadHandler(integration.documentUrl, integration.documentName)}>Descargar contrato</button>
                </div>
            }
          </>
        );
      }
    
    return renderComponent();        
    
}
