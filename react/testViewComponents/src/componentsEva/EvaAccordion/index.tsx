import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moduleStyles from "./EvaAccordion.module.scss";
import EvaTypography from "../EvaTypography";

const Accordion = withStyles({
    root: {
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        minWidth: 288,
        boxShadow: "none",
        "&:before": {
            display: "none",
            borderBottom: "0px solid rgba(0, 0, 0, .0)",
        },
        "&$expanded": {
            margin: "auto",
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
    root: {
        backgroundColor: "#ffff",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        paddingBottom: 24,
        minHeight: 32,
        "&$expanded": {
            minHeight: 32,
            paddingBottom: 16,
        },
    },

    content: {
        margin: 0,
        "&$expanded": {
            margin: 0,
        },
    },
    expandIcon: {
        padding: 0,
        margin: "0px 0px 0px 8px",
    },
    expanded: {
        borderBottom: "0px solid rgba(0, 0, 0, .0)",
    },
}))(MuiAccordionSummary);

type EvaAccordionProps = {
    id: string;
    title: string;
    variant: string; // "faq" | "purchase"
    expanded: string;
    onChange: Function;
    children: JSX.Element | JSX.Element[];
};

const EvaAccordion = (props: EvaAccordionProps) => {
    const handleChange = (panelName) => (event, newExpanded) => {
        props.onChange(newExpanded ? panelName : "");
    };

    const checkVariant = props.variant === "faq";

    const widthStyle = checkVariant ? "" : moduleStyles["accordion--purchase"];

    const summaryStyle = checkVariant
        ? moduleStyles["accordion__summary--faq"]
        : moduleStyles["accordion__summary--purchase"];

    const childrenStyle = checkVariant
        ? moduleStyles["accordion__details--faq"]
        : moduleStyles["accordion__details--purchase"];

    return (
        <Accordion
            square
            expanded={props.expanded === `panel${props.id}`}
            onChange={handleChange(`panel${props.id}`)}
            className={widthStyle}
        >
            <AccordionSummary
                aria-controls={`panel${props.id}-content`}
                id={`panel${props.id}-header`}
                expandIcon={
                    <ExpandMoreIcon
                        className={moduleStyles["accordion__icon"]}
                    />
                }
                className={summaryStyle}
            >
                <EvaTypography variant="body1.medium">
                    {props.title}
                </EvaTypography>
            </AccordionSummary>
            <MuiAccordionDetails className={childrenStyle}>
                {props.children}
            </MuiAccordionDetails>
        </Accordion>
    );
};

export default EvaAccordion;
