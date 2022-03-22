import EvaTypography from "../componentsEva/EvaTypography/index";
import DisencumbranceSteper from "../components/DisencumbranceSteper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import moduleSharedStyles from "../scss/shared.module.scss";
import DisencumbranceHeader from "../components/DisencumbranceHeader";
import variables from "../scss/_variables.module.scss";
import DisencumbranceFooter from "../components/DisencumbranceFooter";
import moduleSteperStyles from "../scss/steper.module.scss";

const sectionContainerShared = classNames(moduleSharedStyles["section-container--center"], moduleSharedStyles["section-container--center__padding"]);
const containerAfterHeader = classNames(moduleSharedStyles["section-container--after-header"]);
const formContainer = classNames(moduleSharedStyles["form-container"]);
const formContainerDivider = classNames(moduleSharedStyles["form-container--divider"]);
const styleHeaderCustom = { backgroundColor: variables.headerGradientColor3, boxShadow: "initial"};    
const steperClass = classNames(moduleSteperStyles["format-disencumbrance"]);

export const BaseSection = (form: JSX.Element, step:number, title:string, description:JSX.Element = <></>) => {
    return (
      <>
      <DisencumbranceHeader variant="nolinks" style={styleHeaderCustom} />

        <section className={containerAfterHeader}>
          <Container>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                {
                  step >= 0 && (
                  <Grid className={steperClass} item lg={8} md={8} sm={12} xs={12}>
                    <DisencumbranceSteper currentStep={step} steps={3} />
                  </Grid>
                  )}
                <Box className={sectionContainerShared}>
                  <EvaTypography variant="h3">
                    {title}
                  </EvaTypography>
                </Box>
                <Box className={sectionContainerShared}>
                  <EvaTypography variant="h6">
                    {description}
                  </EvaTypography>
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className={formContainer}>
                  {form}
                  <div className={formContainerDivider}></div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <DisencumbranceFooter />
        </>
    );
}
