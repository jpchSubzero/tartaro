import EvaSteper from "./index";
import { useState } from 'react';
import EvaButton from "../EvaButton";
import { Grid } from "@material-ui/core";

/**
 * @param props.currentStep  To determine and set on the state, the current step that the stepper is currently on.
 * @returns 
 */

const ExampleSteper = () => {

  
let steps = 0;

    const [activeStep, setActiveStep] = useState(0);

 
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div >
        <Grid container>
         
            <Grid item xs={12} >

        <EvaSteper currentStep={activeStep}  />

        <div>
      
        <EvaButton type='submit'
							variant='contained'
							buttonSize = 'small'
              className="button-header-width"
              disabled={activeStep === 0}
              onClick={handleBack}
						>
							    Anterior
						</EvaButton>

        <EvaButton type='submit'
							variant='contained'
							buttonSize = 'small'
              onClick={handleNext}
              className="button-header-width"
						>
							     {activeStep === steps.length - 1 ? 'Final' : 'Siguiente'}
						</EvaButton>

          
      </div>

        </Grid>

     
        </Grid>
        </div>
    )

}


export default ExampleSteper;