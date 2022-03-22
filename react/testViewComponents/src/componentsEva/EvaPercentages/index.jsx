import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import EvaTypography from "../EvaTypography";
import './EvaPercentages.scss';
import variables from "../../scss/_variables.module.scss";


/**
 * Percentages component for EVA
 *
 * @param props.percentages determines the percentage of the circle and circle bar
 * @param props.thickness determines the thickness width of the spinner which in an SVG starts from 1 to infinite
 * @param props.tipografia determines the typography of the component
 *   @param props.size determines size in pixels of the percentages circle Ex: {104} is 104px height and width
 */


const useDefaultStyles = makeStyles((theme) => ({

  bottom: {
    color: variables.primaryColor100,

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





const EvaPercentages = (props) => {

  const classes = useDefaultStyles();


  return (
    <>
      <Box position="relative" display="inline-flex">

        <div className="percentages-root-styles">
          <CircularProgress
            variant="determinate"
            className={classes.bottom}
            size={props.size}
            thickness={props.thickness}

            value={100}

          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <EvaTypography className="percentages-font-specs" variant={props.tipografia} component="div" >{props.percentage}%</EvaTypography>
          </Box>
          <CircularProgress
            variant="determinate"
            //disableShrink --esto se elimina xq es un error
            className={classes.top}
            classes={{
              circle: classes.circle,
            }}
            size={props.size}
            thickness={props.thickness}
            value={props.percentage}
          /*{...props}*/
          />
        </div>

      </Box>

    </>
  );

}


export default EvaPercentages;