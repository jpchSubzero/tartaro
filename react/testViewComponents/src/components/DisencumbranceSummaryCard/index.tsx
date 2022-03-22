import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import EvaTypography from "../../componentsEva/EvaTypography/index";

//Llamada a modulo de estilos del componente
import moduleSummaryCardStyles from "./DisencumbranceSummaryCard.module.scss";

import { parseJsonToHtml,
	optionRemoveRootParrNode } from "../../utils/JsonConverter";

/**
 * Summary card to show the benefits in the home page
 * @param props.icon Icon image displayed on card
 * @param props.altIcon Alternative text of the icon displayed on the card
 * @param props.title title shown on the card
 * @param props.body text displayed in the body of the card
 * @param props.propsSummary Generic props
 * @returns
 */
const DisencumbranceSummaryCard = (props) => {

	const {
		icon,
		altIcon,
		title,
		body,
		...propsSummary } = props;

	const summaryContainer = classNames(
		moduleSummaryCardStyles["summary-card-container"]);

	const summaryContainerImage = classNames(
		moduleSummaryCardStyles["summary-card-container__image"]);

	const summaryContainerImageAvatar = classNames(
		moduleSummaryCardStyles["summary-container__image--avatar"]);

	const summaryContainerTitle = classNames(
		moduleSummaryCardStyles["summary-card-container__title"]);

	const summaryContainerTitleColor = classNames(
		moduleSummaryCardStyles["summary-card-container__title--color"]);

	const summaryContainerBody = classNames(
		moduleSummaryCardStyles["summary-card-container__body"]);

	const location = process.env.PUBLIC_URL;

	return (
		<div className={summaryContainer} {...propsSummary}>
			<div className={summaryContainerImage}>
				<Avatar className={summaryContainerImageAvatar}>
					<img src={location + icon} alt={altIcon} className="" />
				</Avatar>
			</div>
			<div className={summaryContainerTitle}>
				<EvaTypography
					variant='subtitle2.semibold'
					className={summaryContainerTitleColor}
				>
					{title}
				</EvaTypography>
			</div>
			<div className={summaryContainerBody}>
				<EvaTypography
					variant='body1'
				>
					{parseJsonToHtml(
						body,
						optionRemoveRootParrNode)
					}
				</EvaTypography>
			</div>
		</div>
	)
}

export default DisencumbranceSummaryCard
