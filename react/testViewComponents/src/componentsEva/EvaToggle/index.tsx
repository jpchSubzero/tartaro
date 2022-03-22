import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import variables from "../../scss/_variables.module.scss";

const useStyles = makeStyles({
    root: {
        width: 56,
        height: 32,
        padding: 0,
        margin: 4,
    },
    switchBase: {
        padding: 4,
        "&:hover": {
            backgroundColor: "transparent",
            "&$checked": {
                "& + $track": { backgroundColor: variables.primaryColor300 },
            },
        },
        "&$disabled": {
            color: "#FFFFFF",
            "& + $track": {
                backgroundColor: variables.neutralColor200,
                opacity: 1,
            },
            "&$checked": {
                "& + $track": {
                    backgroundColor: variables.primaryColor200,
                }
            }
        },
        "&$checked": {
            transform: "translateX(24px)",
            color: "#FFFFFF",
            "& + $track": {
                backgroundColor: variables.primaryColor400,
                opacity: 1,
                border: "none",
            },
        },
        "&$focusVisible $thumb": {
            color: "#52d869",
            border: "6px solid #fff",
        },
    },
    thumb: {
        width: 24,
        height: 24,
        boxShadow: "none",
    },
    track: {
        borderRadius: 16,
        backgroundColor: variables.neutralColor300,
        opacity: 1,
    },
    disabled: {},
    checked: {},
    focusVisible: {},
});

function EvaToggle(props) {
    const classes = useStyles();

    return (
        <Switch
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
                disabled: classes.disabled,
            }}
            disableRipple
            color="primary"
            {...props}
        />
    );
}

export default EvaToggle;