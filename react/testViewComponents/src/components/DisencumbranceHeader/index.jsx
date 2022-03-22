import PropTypes from 'prop-types';
import { Container } from "@material-ui/core";
import logoDark from "../../assets/Header/logo-dark.svg";
import logoLigth from "../../assets/Header/logo-ligth.svg";
import HeaderLinks from "../../componentsEva/EvaHeader/HeaderLinks";
import "./Header.scss";
import { Link } from 'react-router-dom';
export const homeRoute = "/healthcare";
/**
 *
 * @param {
 * props.variant (nolinks)
 * Example: <EvaHeader variant="nolinks" />
 * }
 * @returns No links in header in Desktop and Mobile
 *
 * @param {
 * props.variant (links)
 * Example: <EvaHeader variant="links" />
 * }
 * @returns Header menu with links and button in header in Desktop and Mobile
 * 
 * * @param {
 * props.logoVariant (links)
 * Example: <EvaHeader logoMode="light" /> //is default
 * Example: <EvaHeader logoMode="dark" />  
  * }
 * @returns logo image dark or light
 */

const DisencumbranceHeader = (props) => {
	return (
		<header className='header-main-container' style={props.style}>
			<Container className='container-home-wrap'>
				<div className='header-home-wrapper'>
					<Link to={homeRoute}>
					<img
						src={props.logoMode === 'dark' ? logoDark : logoLigth}
						className='img-logo-header'
						alt='Logo header'
					/>
					</Link>
					{props.variant === "nolinks" ? "":<HeaderLinks />}
				</div>
			</Container>
		</header>
	);
};


DisencumbranceHeader.propTypes = {
	variant: PropTypes.string,
	logoMode: PropTypes.oneOf(['light', 'dark']),
	style: PropTypes.any,
  };

  DisencumbranceHeader.defaultProps = {
	logoMode: 'light'
  };
  
export default DisencumbranceHeader;
