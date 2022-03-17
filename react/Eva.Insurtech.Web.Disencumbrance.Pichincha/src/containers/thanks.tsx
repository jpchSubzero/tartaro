import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IRootState from "../interfaces/store/store.root.state.interface";
import { TypesRoutes } from "../types/types.routes";
import { downloadHandler } from "../utils";

export const Thanks = () => {
  const navigate = useNavigate();

  const { person, integration } = useSelector((state: IRootState) => {
    return state;
  });

  useEffect(() => {
    if (!integration.documentName || !integration.documentUrl || !person.fullName || !person.email) {
      navigate(TypesRoutes.ROUTE_HOME);
    }
  }, [integration, person]);

  const renderComponent = () => {
    return (
      <>
        {
          <div>
            <p>
              <strong>Cliente: </strong>
              {person.fullName}
            </p>
            <p>
              <strong>Email: </strong>
              {person.email}
            </p>
            <button
              onClick={() =>
                downloadHandler(
                  integration.documentUrl,
                  integration.documentName
                )
              }
            >
              Descargar contrato
            </button>
          </div>
        }
      </>
    );
  };

  return renderComponent();
};
