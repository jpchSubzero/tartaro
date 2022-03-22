import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EvaButton from "../componentsEva/EvaButton";
import IRootState from "../interfaces/store/store.root.state.interface";
import { TypesRoutes } from "../types/types.routes";
import { capitalizeWord, downloadHandler } from "../utils";
import { BaseSection } from "./base.section";
import moduleSharedStyles from "../scss/shared.module.scss";

export const Thanks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonPrimary = classNames(moduleSharedStyles["button-primary"]);
  const buttonSecondary = classNames(moduleSharedStyles["button-secondary"]);
  const formContainerDivider = classNames(moduleSharedStyles["form-container--divider"]);

  const { person, integration, products } = useSelector((state: IRootState) => {
    return state;
  });

  useEffect(() => {
    if (!integration.documentName || !integration.documentUrl || !person.fullName || !person.email) {
      navigate(TypesRoutes.ROUTE_HOME);
    }
  }, [integration, person]);  // eslint-disable-line react-hooks/exhaustive-deps

  const renderComponent = () => {
    return BaseSection(<></>, -1, `¡Felicidades ${capitalizeWord(person.firstName)}!`, (<><p>Desde hoy tus tarjetas están protegidas con el <strong>{products[0].name}</strong></p><p>Enviamos una copia de tu certificado al correo {person.email}</p><p>También
       lo puedes descargar desde el siguiente enlace</p><br />
       <EvaButton variant="text" size="small" onClick={() => downloadHandler(integration.documentUrl, integration.documentName)}>
          Certificado
        </EvaButton>
       {/* <a
              onClick={() =>
                downloadHandler(
                  integration.documentUrl,
                  integration.documentName
                )
              }
            >
              Descargar contrato
            </a> */}
            </>
            ));

    // return (
    //   <>
    //     {
    //       <div>
    //         <p>
    //           <strong>Cliente: </strong>
    //           {person.fullName}
    //         </p>
    //         <p>
    //           <strong>Email: </strong>
    //           {person.email}
    //         </p>
    //         <button
    //           onClick={() =>
    //             downloadHandler(
    //               integration.documentUrl,
    //               integration.documentName
    //             )
    //           }
    //         >
    //           Descargar contrato
    //         </button>
    //       </div>
    //     }
    //   </>
    // );
  };

  return renderComponent();
};
