import { Container } from "@material-ui/core";
import evalogo from "../../assets/Header/evalogo.svg";
import "./Header.scss";
import HeaderLinks from "./HeaderLinks";

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
 */

const EvaHeader = (props) => {
	return (
		<header className='header-main-container' style={props.style}>
			<Container className='container-home-wrap'>
				<div className='header-home-wrapper'>
					<img
						src={evalogo}
						className='img-logo-header'
						alt='Logo header'
					/>
					{
						props.variant === "nolinks" ? ""
							:
							<HeaderLinks />

					}

				</div>
			</Container>
		</header>
	);
};

export default EvaHeader;
