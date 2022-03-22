import IRootState from '../interfaces/store/store.root.state.interface';
import { getProductsAction } from '../actions/get.products.action';
import { IProductResponse } from '../interfaces/products/product.response.interface';


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import classNames from "classnames";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import EvaTypography from "../componentsEva/EvaTypography/index";
import EvaButton from "../componentsEva/EvaButton/index";
import HealthHeader from "../components/DisencumbranceHeader/index";

//Routs


//utils
import {
    parseJsonToHtml,
    optionRemoveRootParrNode,
    getJsonElementToText
} from "../utils/JsonConverter";
import { sortArrayBy } from "../utils/index";

//Content import
import HomeInfo from '../api/data/home-page.json';
import configuration from "../api/data/configuration.json";

//Style import
import moduleHomeStyles from "../scss/home.module.scss";
import moduleSharedStyles from "../scss/shared.module.scss";
import variables from "../scss/_variables.module.scss";

//Icons
import ImgBenefitsCloudLeft from "../assets/benefits/cloud_left.svg";
import imgBenefitsCloudRight from "../assets/benefits/cloud_right.svg";
import { ProductService } from '../services/productService';
import HealthSummaryCard from '../components/DisencumbranceSummaryCard/index';
import { CoveragesSeccion } from './coveragesSeccion';
import { useNavigate } from 'react-router-dom';
import { TypesRoutes } from '../types/types.routes';
import EvaFooter from '../componentsEva/EvaFooter';


/**DEFINITION STYLE CLASS */
const textColorHighlight = classNames(
    moduleSharedStyles['text-highlight--color']);

const textColorEnd = classNames(
    moduleSharedStyles['text-end--color']);

/** BENEFITS SECCION */
const benefitsSection = classNames(
    moduleHomeStyles['section-benefits']);

const benefitsSectionContainere = classNames(
    moduleHomeStyles['section-benefits-container']);

const benefitsSectionContainerTitle = classNames(
    moduleHomeStyles['section-benefits-container__title']);

const benefitsSectionContainerList = classNames(
    moduleHomeStyles['section-benefits-container__list']);

const benefitsSectionContainerButton = classNames(
    moduleHomeStyles['section-benefits-container__action']);

const benefitsSectionContainerButtonCloud = classNames(
    moduleHomeStyles['section-benefits-container__action--img-cloud']);
    const buttonPrimary = classNames(moduleSharedStyles["button-primary"]);
    const buttonSecondary = classNames(moduleSharedStyles["button-secondary"]);
    const formContainerDivider = classNames(moduleSharedStyles["form-container--divider"]);

/** FAQ SECCION */

//Information to show
const benefitsInfo = HomeInfo["benefitsSection"];
const benefitsInfoList = HomeInfo["benefitsSection"]["itemsList"];
const homeDefaultItem = HomeInfo["defaultItem"];
const homePageConfigurations = configuration.homePage;


function Product() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
  const navigate = useNavigate();


    const products = useSelector((state:IRootState) => state.products ); 

    async function fetchProductData() {
        setLoading(true);
        const response:IProductResponse = await ProductService.getProductByConfiguredFiltersCodeAsync();
        if (response) {
            dispatch(getProductsAction(response.result?.$values));
        }
        setLoading(false);
    }

    useEffect(() => {
        if (!products[0].$id) {
            fetchProductData(); 
        } else {
            setLoading(false);
        }    
    }, [products]); // eslint-disable-line react-hooks/exhaustive-deps



    const styleHeaderCustom = {
        backgroundColor: variables.headerGradientColor3,
        boxShadow: "initial"
    };    




    const renderComponent = () => { 
        const productData = products[0];

        return (
            <>
                <HealthHeader variant="nolinks" style={styleHeaderCustom} />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <EvaButton className={buttonPrimary} variant="contained" onClick={() => navigate(TypesRoutes.ROUTE_SUBSCRIPTION)}>
                        Contratar
                        </EvaButton>
                    </Grid>
                </Grid>

            {/** COVERAGE SECCION */}
            <CoveragesSeccion productIndex={0} products={products} />
            {/** BENEFITS SECCION */}
            <section className={benefitsSection}>
                <Container>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        className={benefitsSectionContainere}
                    >
                        <Grid
                            item
                            lg={10}
                            md={12}
                            sm={12}
                            xs={12}
                        >
                            <Box className={benefitsSectionContainerTitle}>
                                <EvaTypography
                                    variant='h3'
                                >
                                    {`${benefitsInfo["title"].normalTitle} `}
                                    <span className={textColorHighlight}>
                                        {`${benefitsInfo["title"].highlightTitle}`}
                                    </span>
                                    <span className={textColorEnd}>
                                        {`${benefitsInfo["title"].endTitle}`}
                                    </span>
                                </EvaTypography>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                        >
                            <Box display="flex" className={benefitsSectionContainerButton}>
                                <div className={benefitsSectionContainerButtonCloud}>
                                    <img src={ImgBenefitsCloudLeft}
                                        alt={"cloud left"}
                                    />
                                </div>
                                <div className={benefitsSectionContainerButtonCloud}>
                                    <img src={imgBenefitsCloudRight}
                                        alt={"cloud right"}
                                    />
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <EvaFooter />


                {/* <ProductFeatures features={generateDinamicItems(5, coverages, [], "") as IProductFeature[]} title="Coberturas" version="0" />
                <hr />
                <ProductFeatures features={generateDinamicItems(5, exclusions, [], "") as IProductFeature[]} title="Exclusiones" version="0" />
                <hr />
                <ProductFeatures features={generateDinamicItems(5, assistances, [], "") as IProductFeature[]} title="Asistencias" version="0" />
                <hr /> */}
            </>
        );
    }
    
    const renderLoading = () => { 
        return (
            <>
                <h1>Cargando productos...</h1>
            </>
        );
    }    

    if (loading) {
        return renderLoading();    
    } else {
        return renderComponent();        
    }
}

export default Product;
