import FormControl from '@material-ui/core/FormControl';
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import EvaTypography from "../EvaTypography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import variables from "../../scss/_variables.module.scss";
import moduleStyles from "./EvaSelectField.module.scss";

const useStyles = makeStyles({
    root: {
        ' & .MuiSelect-root': {
            height: 48,
            padding: 0,
        },
        ' & .MuiSelect-icon ': {
            color: variables.primaryColor400,
        },
        ' & .MuiSelect-icon.Mui-disabled ': {
            color: variables.primaryColor100,
        },
        '& .MuiInputBase-root': {
            fontFamily: variables.fontBody,
            fontSize: 14,
            padding: 0,
            height: 48,
            background: 'white',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
                transition: "all 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                borderColor: variables.neutralColor700,
            },
            '&:hover fieldset': {
                borderColor: variables.primaryColor400,
                border: '2px solid'
            },
            '&.Mui-focused fieldset': {
                borderColor: variables.primaryColor400,
            },
            '&.Mui-error.Mui-focused fieldset': {
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
            background: 'white',
            padding: '3px 36px 0px 16px',
        },
        '& .MuiFormHelperText-root.Mui-error': {
            background: 'white',
            color: variables.errorColor400
        },
        '& .MuiFormHelperText-contained': {
            fontFamily: variables.fontBody,
            marginLeft: 16,
            marginTop: 8,
            height: 16,
        },
    },
});

export default function EvaSelectField(props) {
    const classes = useStyles();

    const dropDownHelperText =
        <FormHelperText>
            <div className={moduleStyles['EvaSelectField-helperText-items-container']} >
                {props.error ? <ErrorIcon className={moduleStyles['EvaSelectField-helperText-icon']}
                /> : null}
                {props.helpertext}
            </div>
        </FormHelperText>

    return (
        <FormControl fullWidth variant="outlined" className={classes.root} error={props.error}  >
            <EvaTypography variant='body2.medium' className={moduleStyles['EvaSelectField-fieldLabel']}>{props.fieldlabel}</EvaTypography>
            <Select
                labelId="eva-select-label"
                id="eva-select"
                native
                defaultValue='none'
                IconComponent={ExpandMoreIcon}
                {...props}
            >
                <option value="none" disabled >Select your option</option>
                <option value={10}>Tenasdfasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </Select>
            {dropDownHelperText}
        </FormControl>
    )
}
