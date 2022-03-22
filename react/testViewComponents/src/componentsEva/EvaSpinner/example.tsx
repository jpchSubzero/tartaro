import EvaSpinner from './index';
import { Grid } from "@material-ui/core";

const ExampleSpinners = () => {

        return (

            <Grid container>
                <Grid item xs={12} sm={6} >

                <div style={{ display: "center", margin: "25px" }}>
                    <h5>Spinner Tamaño Mediano, Color Primario</h5>
                <EvaSpinner size={104} thickness={5} color="spinner-primary-color"  />
                    </div>
                    </Grid>

                
                    <br/>
                    <Grid item xs={12} sm={6} >
                    <div style={{ display: "center", margin: "25px" }}>
                    <h5>Spinner Tamaño Pequeño, Color Primario</h5>
                <EvaSpinner size={40} thickness={4} color="spinner-primary-color" />
                    </div>
                    </Grid>
            
            </Grid>

        )

}

export default ExampleSpinners;