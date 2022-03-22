import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import EvaTypography from "../../componentsEva/EvaTypography/index";
import classNames from "classnames";

//Style import
import moduleHealthProgressBarStyles from "./HealthProgressBar.module.scss";


/**DEFINITION STYLE CLASS */
const sectionText = classNames(
	moduleHealthProgressBarStyles['progress-bar__text']);

const sectionLinear = classNames(
	moduleHealthProgressBarStyles['progress-bar__linear-progress']);

const index = (props) => {
	const suffix = props.suffix ? props.suffix : "";
	return (
		<>
			<Box minWidth={35} className={sectionText} mb={1}>
				<EvaTypography
					variant="body2">
					{`${Math.round(props.value,)}% ${suffix}`}
				</EvaTypography>
			</Box>
			<Box width="100%" className={sectionLinear}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
		</>
	)
}

export default index
