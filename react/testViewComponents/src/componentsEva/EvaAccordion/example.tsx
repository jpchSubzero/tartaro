import React, { useState } from "react";
import EvaTypography from "../EvaTypography";
import EvaAccordion from "./index";
import PurchaseSummaryItem from "./PurchaseSummaryItem";

const questions = [
    {
        id: "1",
        questionText: "¿Desde cuándo puedo usar mi seguro?",
        answer: "La única forma de disfrutar verdaderamente de la vida es proteger a quienes más queremos en caso de que nos pase algo. Y si llegamos a sufrir un accidente grave, es bueno tenerlo cubierto, ¿no crees?",
    },
    {
        id: "2",
        questionText: "¿Por qué contratar con NOVA?",
        answer: "Trabajamos con las mejores aseguradoras del país y te explicamos tu seguro en todo sentido. Sin cargos ocultos ni letras chiquitas.",
    },
    {
        id: "3",
        questionText: "¿Cuánto cuesta un seguro de vida?",
        answer: "Puedes elegir tu plan según tu presupuesto y  tus necesidades. NOVA te ofrece planes desde $0.99 centavos al mes.",
    },
];

const ExampleAccordion = () => {
    const [expanded, setExpanded] = useState("");

    return (
        <div>
            <br />
            <br />
            <br />
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
                Accordion variante FAQ
            </div>
            {questions.map(({ id, questionText, answer }) => (
                <EvaAccordion
                    id={id}
                    key={id}
                    expanded={expanded}
                    onChange={setExpanded}
                    title={questionText}
                    variant="faq"
                >
                    <EvaTypography variant="body2">{answer}</EvaTypography>
                </EvaAccordion>
            ))}
            <br />
            <br />
            <br />
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
                Accordion variante Resumen de Compra
            </div>
            <div
                style={{
                    marginTop: 16,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <EvaAccordion
                    id="4"
                    expanded={expanded}
                    onChange={setExpanded}
                    title="Seguro de accidentes personales"
                    variant="purchase"
                >
                    <PurchaseSummaryItem
                        content="Muerte por cualquier causa"
                        price="$ 125.000"
                    />
                    <PurchaseSummaryItem
                        content="Muerte por cualquier causa"
                        price="$ 125.000"
                    />
                    <PurchaseSummaryItem
                        content="Muerte por cualquier causa"
                        price="$ 125.000"
                    />
                </EvaAccordion>
            </div>
            <br />
            <br />
            <br />
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
                Accordion variante Resumen de Compra (Icon)
            </div>
            <div
                style={{
                    marginTop: 16,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <EvaAccordion
                    id="5"
                    expanded={expanded}
                    onChange={setExpanded}
                    title="Seguro de accidentes personales"
                    variant="purchase"
                >
                    <PurchaseSummaryItem
                        withIcon={true}
                        content="Muerte por cualquier causa"
                        price="$ 125.000"
                    />
                    <PurchaseSummaryItem
                        withIcon={true}
                        content="Muerte por cualquier causa"
                        price="$ 125.000"
                    />
                    <PurchaseSummaryItem
                        withIcon={true}
                        content="Muerte por cualquier causa"
                        price="$ 125.000"
                    />
                </EvaAccordion>
            </div>
        </div>
    );
};

export default ExampleAccordion;
