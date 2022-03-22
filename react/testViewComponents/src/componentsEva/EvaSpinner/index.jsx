import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './EvaSpinner.scss';



/**
 * Spinner for EVA
 *
 * @param props.color determines the main color of the spinner,Ex: color="spinner-primary-color" Classname for
 *  for the primary color.    
 * @param props.thickness determines the thickness width of the spinner which in an SVG starts from 1 to infinite
 * @param props.size  Give the width and height of the Spinner size="100" Equals, 100px width X 100px height.  
 * Examples of the implementation at Examples.tsx
 * Documentation at: https://v4.mui.com/components/progress/#circular MUI v.4
 *   
 */

  const defaultSpinnerstyles = makeStyles((theme) => ({
   
    bottom: {
      color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
     
    },
    top: {
      color: '#733BE6',
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
    circle: {
      strokeLinecap: 'round',
    },
  }));


  
  const EvaSpinner = (props) => {
    const classes = defaultSpinnerstyles();

  
    return (
    <>
      <div className={props.color} >
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
      </div>

</>
    );
  }
  

  



  
export default EvaSpinner;

