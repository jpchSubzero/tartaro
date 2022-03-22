import EvaPercentages from './index';
import { Grid } from "@material-ui/core";

const ExamplePercentages = () => {

    return (

        <Grid container>
            <Grid item xs={12} sm={4} >

                <div style={{ display: "center", margin: "25px" }}>
                    <h5>Porcentajes Tamaño Grande</h5>
                    <EvaPercentages size={104} thickness={5} percentage={60} tipografia="h5" />
                </div>
            </Grid>
            <br />
            <Grid item xs={12} sm={4} >
                <div style={{ display: "center", margin: "25px" }}>
                    <h5>Porcentajes Tamaño Mediano</h5>
                    <EvaPercentages size={72} thickness={5} percentage={80} tipografia="subtitle2.bold" />
                </div>
            </Grid>
            <br />
            <Grid item xs={12} sm={4} >
                <div style={{ display: "center", margin: "25px" }}>
                    <h5>Porcentajes Tamaño Pequeño</h5>
                    <EvaPercentages size={64} thickness={5} percentage={80} tipografia="body1" />
                </div>
            </Grid>

        </Grid>

    )

}

export default ExamplePercentages;