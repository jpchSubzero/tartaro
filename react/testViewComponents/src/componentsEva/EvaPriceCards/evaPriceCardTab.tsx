import Tab from "@material-ui/core/Tab";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

import variables from "../../scss/_variables.module.scss";
import moduleStyles from "./EvaPriceCardTab.module.scss";

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

// TAB STYLES from material UI
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
        minWidth: 288,
    },
    indicator: {
        backgroundColor: "transparent",
    },
    selected: {
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: variables.primaryColor100,
    },
});


export default function EvaPriceCardTab(props) {
    const tabClasses = useStyles();


    const tagPriceCard = props.tagdescription ? (
        <div className={moduleStyles['EvaPriceCardTab-tag-container']}>
            <Chip
                size="small"
                classes={{
                    root: moduleStyles['EvaPriceCardTab-tag'],
                    label: moduleStyles['EvaPriceCardTab-tag-label'],
                }}
                label={
                    props.tagdescription
                }
            />
        </div>) : null
    return (
        <>
            {tagPriceCard}
            <Tab
                disableRipple
                classes={{
                    root: tabClasses.root,
                    selected: tabClasses.selected,
                }}
                label={props.tabcontent}
                {...a11yProps(props.cardtabid)}
                {...props}
            />
        </>
    )
}
