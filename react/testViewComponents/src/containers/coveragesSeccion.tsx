import classNames from "classnames";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import EvaTypography from "../componentsEva/EvaTypography/index";
import HealthCardCoverage from "../components/DisencumbranceCoverageCard";

//Content import
import HomeInfo from "../api/data/home-page.json";
import configuration from "../api/data/configuration.json";

//Style import
import moduleHomeStyles from "../scss/home.module.scss";
import moduleSharedStyles from "../scss/shared.module.scss";

//Icons
import { productsReducer } from "../reducers/productsReducer";
import { IProductResponseResultValue } from "../interfaces/products/product.response.interface";
import { generateDinamicItems } from "../utils/utilsTsx";

/**DEFINITION STYLE CLASS */
const textColorHighlight = classNames(
  moduleSharedStyles["text-highlight--color"]
);

/** COVERAGE SECCION */
const coverageSection = classNames(moduleHomeStyles["section-coverage"]);

const coverageSectionContainerTitle = classNames(
  moduleHomeStyles["section-coverage-container__title"]
);

//Information to show
const coverageInfo = HomeInfo["coverageSection"];
const homePageConfigurations = configuration.homePage;

interface IProps {
  productIndex: number;
  products: IProductResponseResultValue[];
}

export const CoveragesSeccion = ({ productIndex, products }: IProps) => {
  const productData = products[productIndex];
  const coverages = productData?.coverages.$values;
  const exclusions = productData?.exclusions.$values;
  return (
    <section className={coverageSection}>
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item lg={10} md={12} sm={12} xs={12}>
            <Box className={coverageSectionContainerTitle}>
              <EvaTypography variant="h3">
                {`${coverageInfo["title"].normalTitle} `}
                <span className={textColorHighlight}>
                  {`${coverageInfo["title"].highlightTitle}`}
                </span>
              </EvaTypography>
            </Box>
          </Grid>
          <Grid item lg={5} md={8} sm={8} xs={12}>
            <Box
              pr={{ xs: 0, sm: 0, md: 0, lg: 0.5 }}
              pb={{ xs: 0.5, sm: 0, md: 0, lg: 0 }}
            >
              {products && (
                <HealthCardCoverage
                  coverageTitle={
                    coverageInfo["coverageAccepted"]["title"]["normalTitle"]
                  }
                  variant={coverageInfo["coverageAccepted"]["variant"]}
                  coverageList={generateDinamicItems(
                    homePageConfigurations.coveragesToShow,
                    coverages,
                    coverageInfo["coverageAccepted"]["itemsList"],
                    "coverage"
                  )}
                  coverageNotification={
                    coverageInfo["coverageAccepted"]["coverageNotification"]
                  }
                />
              )}
            </Box>
          </Grid>
          <Grid item lg={5} md={8} sm={8} xs={12}>
            <Box
              pl={{ xs: 0, sm: 0, md: 0, lg: 0.5 }}
              pt={{ xs: 0.5, sm: 0, md: 0, lg: 0 }}
            >
              {productsReducer && (
                <HealthCardCoverage
                  coverageTitle={
                    coverageInfo["coverageRejected"]["title"]["normalTitle"]
                  }
                  variant={coverageInfo["coverageRejected"]["variant"]}
                  coverageList={generateDinamicItems(
                    homePageConfigurations.exclusionsToShow,
                    exclusions,
                    coverageInfo["coverageRejected"]["itemsList"],
                    "coverage"
                  )}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
