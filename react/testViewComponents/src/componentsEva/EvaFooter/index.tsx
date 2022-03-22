import { Container, Grid } from "@material-ui/core/";
import moduleFooterStyle from './EvaFooter.module.scss';
import EvaTypography from "../EvaTypography";

/**
 * Footer componente for web side
 * display the text of rights reserved
 * @param {string} props.year Text type property
 * indicating the year, default value "2021".
 * @param {string} props.evaName Text type property
 *  indicating the name, default value "EVA".
 * @param {string} props.rightsReserved Text type property that
 * indicates the reserved rights, default value
 * "Todos los derechos reservados.".
 * @param {string} props.className Text type property that
 * indicates the className to the footer.
 * @param {string} props.classTypography Text type property that
 * indicates the className to the typography.
 * @returns FooterComponent
 */

const Footer = (props) => {

	const year = (props.year) ? props.year :"2021";
	const evaName =(props.evaName) ? props.evaName :"EVA";
	const rightsReserved = (props.rightsReserved) ? props.rightsReserved : "Todos los derechos reservados.";
	const customFooterClass = props.className ? props.className : "";
	const customTypographyClass = props.classTypography ? props.classTypography : "";

	//class Names
	const footerEva = moduleFooterStyle["footer-eva"];
	const footerEvaContainer = moduleFooterStyle["footer-eva-container"];
	const footerGridItem = moduleFooterStyle["footer-eva-container-grid__item"];
	const footerParagraph = moduleFooterStyle["footer-eva-container-grid-item__paragraph"];

	return (
		<footer style={props.style} className={`${footerEva} ${customFooterClass}`} >
			<Container className= {footerEvaContainer} >
				<Grid container>
					<Grid item
						lg={12}
						md={12}
						sm={12}
						xs={12}
						className = {footerGridItem}
					>
						<EvaTypography variant='body2' className={`${footerParagraph} ${customTypographyClass}`}  >
							{`© ${year} ${evaName} `} <br /> {`${rightsReserved}`}
						</EvaTypography>
					</Grid>
				</Grid>
			</Container>
		</footer>
	)
}

export default Footer;
