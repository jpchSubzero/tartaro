import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import dataSteps from "./StepsList.json";

let result = [];
result = dataSteps.map((data) => data.description);

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

function getSteps() {
  return result;
}

const DisencumbranceSteper = (props) => {
  const classes = useStyles();

  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={props.currentStep} alternativeLabel>
        {steps.map((label, index) =>
          label === "" ? (
            <Step key={index} className="text-label-hide">
              <StepLabel className="circle-background-color" disabled>
                {label}
              </StepLabel>
            </Step>
          ) : (
            <Step key={index} className="text-label-display">
              <StepLabel className="circle-background-color" disabled>
                {label}
              </StepLabel>
            </Step>
          )
        )}
      </Stepper>
    </div>
  );
};

export default DisencumbranceSteper;
