import {
	Box,
	Dialog,
	DialogContent
} from "@mui/material";
import classNames from "classnames";
import EvaTypography from "../../componentsEva/EvaTypography/index";
import DisencumbranceSpinner from '../DisencumbranceSpinner';

//Syles component
import moduleLoadingDialogStyles from "./DisencumbranceLoadingDialog.module.scss";
import variables from "../../scss/_variables.module.scss";

/**DEFINITION STYLE CLASS */
const spinnerContainer = classNames(
	moduleLoadingDialogStyles["loading-container__spinner"]);
const spinnerContainerItem = classNames(
	moduleLoadingDialogStyles["loading-container__spinner--item"]);

const textContainer = classNames(
	moduleLoadingDialogStyles["loading-container__text"]);

const textContainerTitle = classNames(
	moduleLoadingDialogStyles["loading-container__text--title"]);
const textContainerSubtitle = classNames(
	moduleLoadingDialogStyles["loading-container__text--subtitle"]);

function DisencumbranceLoadingDialog(props) {
	return (
		<Dialog
			fullWidth={true}
			maxWidth='xs'
			scroll='paper'
			open={props.open}
			fullScreen={props.fullScreen}
			disableEscapeKeyDown={true}
			PaperProps={{
				elevation: 0,
				className: "alert-modal-paper",
			}}
			BackdropProps={{
				style: {
					backgroundColor: variables.neutralColorWhite,
					opacity: 0.9
				},
			}}
		>
			<DialogContent>
				<Box className={spinnerContainer}>
					<DisencumbranceSpinner
						size={70}
						thickness={4}
						className={`spinner-primary-color ${spinnerContainerItem}`} />
	          {/* <EvaTypography variant='body2.medium' className={textContainerTitle}>asfasdfadfasfasdf</EvaTypography> */}

				</Box>
				{
					(props.title !== undefined || props.subtitle !== undefined) ?
						<Box className={textContainer}>
							<EvaTypography variant='h4' className={textContainerTitle}>
								{props.title}
							</EvaTypography>
							<EvaTypography variant='body2' className={textContainerSubtitle }>
								{props.subtitle}
							</EvaTypography>
						</Box> : <></>
				}
			</DialogContent>
		</Dialog>
	);
}
export default DisencumbranceLoadingDialog;