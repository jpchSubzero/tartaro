import React from "react";
import Tabs from "@material-ui/core/Tabs";
import EvaTypography from "../EvaTypography";
import { makeStyles } from "@material-ui/core/styles";
import EvaPriceCardTab from './evaPriceCardTab'
import EvaRadioButton from '../EvaRadioButton';
import DeleteIcon from '@material-ui/icons/Delete';
import variables from "../../scss/_variables.module.scss";

//  MuiButtonBase-root MuiTab-root MuiTab-textColorInherit makeStyles-root-31 MuiTab-fullWidth
const useStyles = makeStyles({
    root: {
        textTransform: "none",
        fontFamily: variables.fontBody,
        border: "0.5px solid",
        borderColor: variables.primaryColor400,
        borderRadius: 5,
        padding: 16,
        flexBasis: 'unset',
        opacity: 'unset',
        marginBottom: 32,
    },
    indicator: {
        backgroundColor: "transparent",
    },
    selected: {
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: variables.primaryColor100,
    },
});


export default function EvaPriceCards() {
    const [tabsValue, SetTabsValue] = React.useState(2);
    const classes = useStyles();


    // Change the value on click the tab  and return it to the parent
    const handleTabChange = (event, newTabsValue) => {
        SetTabsValue(newTabsValue);
        console.log(newTabsValue)
    };

    return (
        <Tabs
            value={tabsValue}
            onChange={handleTabChange}
            variant="fullWidth"
            aria-label="selection tabs"
            orientation="vertical"
            classes={{
                indicator: classes.indicator
            }}>

            <EvaPriceCardTab
                cardtabid={0}
                tagdescription='Descuento por pago anual'
                tabcontent={<div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                    }}

                >
                    <div >
                        <div style={{ textAlign: "start", marginRight: 16, }}>
                            <EvaTypography variant="body2.bold" >
                                Total Mensual
                            </EvaTypography>
                            <EvaTypography variant="body2.bold" >
                                Mensual
                            </EvaTypography>
                        </div>
                    </div>
                    <div
                        style={{ marginLeft: "auto", }}
                    >
                        <EvaTypography variant="subtitle2.semibold" >
                            $32.15 /mes
                        </EvaTypography>
                    </div>
                </div>} />
            <EvaPriceCardTab
                cardTabId={1} /*  tagDescription='Descuento por pago anual' */
                tabcontent={
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <div >

                            <div>
                                Total Mensual
                            </div>
                        </div>
                        <div
                            style={{ marginLeft: "auto", fontSize: 18, color: "#0F265C" }}
                        >
                            50 USD
                        </div>
                    </div>
                }
            />


            <EvaPriceCardTab cardTabId={2} tabcontent={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <div style={{ textAlign: "start" }} >
                        <EvaTypography variant="body2.bold" style={{ color: '#733BE6' }} >
                            Anual
                        </EvaTypography>
                        <EvaTypography variant="helper2" >
                            1 pago cada mes
                        </EvaTypography>

                    </div>
                    <div
                        style={{ marginLeft: "auto", fontSize: 18, color: "#0F265C" }}
                    >
                        <EvaTypography variant="subtitle2.bold" style={{ marginBottom: 0 }} >
                            $32.15 /mes
                        </EvaTypography>

                    </div>
                </div>
            }
            />
            <EvaPriceCardTab cardTabId={3} tabcontent={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <div /* style={{  marginRight: 16, }} */>
                        <EvaRadioButton />
                    </div>
                    <div style={{ textAlign: "start" }} >
                        <EvaTypography variant="body2.bold" style={{ color: '#733BE6' }} >
                            Anual
                        </EvaTypography>
                        <EvaTypography variant="helper2" >
                            1 pago cada mes
                        </EvaTypography>

                    </div>
                    <div
                        style={{ marginLeft: "auto", fontSize: 18, color: "#0F265C" }}
                    >
                        <EvaTypography variant="subtitle2.bold" style={{ marginBottom: 0 }} >
                            $32.15 /mes
                        </EvaTypography>

                    </div>
                </div>
            }
            />
            <EvaPriceCardTab cardTabId={4} tagdescription='Descuento por pago anual' tabcontent={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <div style={{ textAlign: "start" }} >
                        <EvaTypography variant="body2.bold" style={{ color: '#733BE6' }} >
                            Anual
                        </EvaTypography>
                        <EvaTypography variant="helper2" >
                            1 pago cada mes
                        </EvaTypography>

                    </div>
                    <div
                        style={{ marginLeft: "auto", marginRight: 16, }}
                    >
                        <EvaTypography variant="subtitle2.bold" style={{ marginBottom: 0 }} >
                            $32.15 /mes
                        </EvaTypography>
                    </div>
                    <div style={{ marginBottom: -6 }}>
                        <DeleteIcon />
                    </div>
                </div>
            }
            />
        </Tabs>
    )
}
