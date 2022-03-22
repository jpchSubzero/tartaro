import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import variables from "../../scss/_variables.module.scss";

const useStyles = makeStyles({
    root: {
        padding: 12,
        "&:hover": {
            backgroundColor: `${variables.primaryColor100}80 !important`,
        },
        "&:active": {
            backgroundColor: `${variables.primaryColor100}E6 !important`,
        },
    },
    icon: {
        border: "1px solid",
        borderColor: variables.primaryColor400,
        borderRadius: 16,
        width: 14,
        height: 14,

        "input:disabled ~ &": {
            boxShadow: "none",
            background: "rgba(206,217,224,.5)",
        },
    },
    checkedIcon: {
        backgroundColor: variables.primaryColor400,
        border: "1px solid",
        borderColor: variables.primaryColor400,
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 14,
        height: 14,
    },

    innerIcon: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: "#ffffff",
    },
});

function EvaRadioButton(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="primary"
            checkedIcon={
                <span className={classes.checkedIcon}>
                    <span className={classes.innerIcon}></span>
                </span>
            }
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

export default EvaRadioButton;
