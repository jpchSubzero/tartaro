import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import variables from "../../scss/_variables.module.scss";

const useStyles = makeStyles({
    root: {
		padding: 12,
        "&:hover": {
            backgroundColor: `${variables.primaryColor100}80 !important`,
        },
		"&:active": {
			backgroundColor: `${variables.primaryColor100}E6 !important`,
		}
    },
    icon: {
        border: "1px solid",
        borderColor: variables.primaryColor400,
        borderRadius: 2,
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
        borderRadius: 2,
        "&:before": {
            display: "block",
            width: 14,
            height: 14,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        }
    },
});

function EvaCheckBox(props) {
    const classes = useStyles();

    return (
        <Checkbox
            className={classes.root}
            disableRipple
            color="primary"
            icon={<span className={classes.icon} />}
            checkedIcon={<span className={classes.checkedIcon} />}
            inputProps={{ "aria-label": "decorative checkbox" }}
            {...props}
        />
    );
}

export default EvaCheckBox;
