import { makeStyles, TextField } from "@material-ui/core";
import EvaTypography from "../EvaTypography";
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import moduleStyles from "./EvaTextField.module.scss";
import variables from "../../scss/_variables.module.scss";


const useStyles = makeStyles({
    root: {
        '& .MuiInputBase-root': {
            fontFamily: variables.fontBody,
            fontSize: 14,
            padding: 0,
            maxHeight: 48,
            background: 'white',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
                transition: "transform 1500ms ease-in-out 25ms",
               /* transition: 'border-color 0.2s, box-shadow 02.s', */
                borderColor: variables.neutralColor700,
            },
            '&:hover fieldset': {
                borderColor: variables.primaryColor400,
                border: '2px solid'
            },
            '&.Mui-focused fieldset': {
                borderColor: variables.primaryColor400,
            },
            '&.Mui-error.Mui-focused  fieldset': {
                borderColor: variables.errorColor400,
            },
            '&.Mui-error:hover fieldset': {
                borderColor: variables.errorColor400,
            },
            '&.Mui-disabled fieldset': {
                borderColor: variables.neutralColor300,
            },
            '&.Mui-disabled:hover fieldset': {
                border: '1px solid',
                borderColor: variables.neutralColor300,
            },
        },

        '& .MuiOutlinedInput-input': {
            padding: '16px 16px',
        },
        '& .MuiFormHelperText-root.Mui-error': {
            marginLeft: 24,
            fontFamily: variables.fontBody,
            color: variables.errorColor400
        },
        '& .MuiFormHelperText-contained': {
            fontFamily: variables.fontBody,
            marginLeft: 16,
            marginTop: 8,
            height: 16,
        },
        '& .MuiInputAdornment-positionEnd': {
            marginLeft: 0,
        },
        '& .MuiInputAdornment-positionStart': {
            marginRight: 0,
        },

    },
});




export default function EvaTextField(props) {
    const classes = useStyles();

    // Get the icon and styles to be rendered at the end of the input contol on each case
    const getEndInputAdorment = () => {
        // No icon and no error
        if (!props.endAdormentIcon && !props.error) { return null; }
        let endAdormentIconToRender = props.endAdormentIcon ? props.endAdormentIcon : <ErrorOutlineIcon />;
        let endAdormentIconClassName = props.error ? moduleStyles['EvaTextField-EndAdorment--error'] : moduleStyles['EvaTextField-EndAdorment'];

        return <InputAdornment position="end">
            <div className={endAdormentIconClassName} >
                {endAdormentIconToRender}
            </div>
        </InputAdornment>
    }

    // Get the icon and styles of the icon placed at the begining of the texfield
    const startInputAdorment = props.startAdormentIcon ? <InputAdornment position="start">
        <div className={moduleStyles['EvaTextField-StartAdorment']}  >
            {props.startAdormentIcon}
        </div>
    </InputAdornment> : null

    return (
        <>
            <EvaTypography variant='body2.medium' className={moduleStyles['EvaTextField-fieldlabel']}>{props.fieldlabel}</EvaTypography>
            <TextField
                className={classes.root}
                fullWidth
                autoComplete='off'
                variant='outlined'
                InputProps={{
                    startAdornment: startInputAdorment,
                    endAdornment: getEndInputAdorment(),
                }}
                {...props}
            />
        </>

    )
}
