import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from "@material-ui/core/Box";
import './DisencumbranceSpinner.scss';
import variables from "../../scss/_variables.module.scss";

/**
 * Spinner for EVA
 *
 * @param props.className determines the main color of the spinner,Ex: color="spinner-primary-color" Classname for
 *  for the primary color.
 * @param props.thickness determines the thickness width of the spinner which in an SVG starts from 1 to infinite
 * @param props.size  Give the width and height of the Spinner size="100" Equals, 100px width X 100px height.  
 * Examples of the implementation at Examples.tsx
 * Documentation at: https://v4.mui.com/components/progress/#circular MUI v.4
 *
 */

const DisencumbranceSpinner = (props) => {

  const defaultSpinnerstyles = makeStyles((theme) => ({
    bottom: {
      color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
      color: variables.primaryColor400,
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
    circle: {
      strokeLinecap: 'round',
    },
  }));

  // Box STYLES from material UI (normal)
const CustomBox = withStyles({
	root: {
		width: props.size,
    height: `calc(${props.size}px + 10px)`,
	}
})(Box);

  const classes = defaultSpinnerstyles();

  return (
    <>
      <CustomBox className={props.className} >
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={props.size}
          thickness={props.thickness}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={props.size}
          thickness={props.thickness}

        />
      </CustomBox>
    </>
  );
}

export default DisencumbranceSpinner;

