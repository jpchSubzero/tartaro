import classNames from "classnames";
import EvaTypography from "../../componentsEva/EvaTypography/index";
import HealthAlert from "../DisencumbranceAlert/index";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ClearIcon from '@material-ui/icons/Clear';

//Llamada a modulo de estilos del componente
import moduleCoverageCardStyles from "./DisencumbranceCoverageCard.module.scss";

//Import from utils
import { parseJsonToHtml,
	optionRemoveRootParrNode } from "../../utils/JsonConverter"


/**
 * Generic card to show covers and exclusions
 * @param props.variant Variant of card to display (rejected / accepted)
 * @param props.coverageList list of items to display the card
 * @param props.coverageTitle title to show the card
 * @param props.coverageNotification Object with notification
 * information in case you want to show
 * @param props.propsCoverage Generic props
 * @returns
 */
const DisencumbranceCoverageCard = (props) => {

	const {
		variant,
		coverageList,
		coverageTitle,
		coverageNotification,
		...propsCoverage } = props;

	const variantAccept = 'accepted';
	const variantRejected = 'rejected';

	/**DEFINITION STYLE CLASS */
	const coverageContainer = classNames(
		moduleCoverageCardStyles["coverage-container"], {
		[moduleCoverageCardStyles["coverage-container--accepted"]]:
			!variant || variant === variantAccept,
		[moduleCoverageCardStyles["coverage-container--rejected"]]:
			variant === variantRejected,
	});

	const coverageContainerTitle = classNames(
		moduleCoverageCardStyles["coverage-container__title"]);

	const coverageContainerList = classNames(
		moduleCoverageCardStyles["coverage-container__list"]);

	const coverageContainerListItem = classNames(
		moduleCoverageCardStyles["coverage-container__list--item"]);

	const coverageContainerNotification = classNames(
		moduleCoverageCardStyles["coverage-container__notification"]);

	const coverageAvatar = classNames(
		moduleCoverageCardStyles["coverage-container__list-avatar"], {
		[moduleCoverageCardStyles["coverage-container__list-avatar--accepted"]]:
			!variant || variant === variantAccept,
		[moduleCoverageCardStyles["coverage-container__list-avatar--rejected"]]:
			variant === variantRejected,
	});

	const location = process.env.PUBLIC_URL;

	return (
		<div className={coverageContainer}>
			<div className={coverageContainerTitle}>
				<EvaTypography
					variant='h3'
				>
					{coverageTitle}
				</EvaTypography>
			</div>
			<div {...propsCoverage} className={coverageContainerList}>
				<List className={coverageContainerListItem}>
					{coverageList.map(({ id, icon, body, altIcon }) => (
						<ListItem key={id}>
							<ListItemAvatar>
								<Avatar className={coverageAvatar}>
									{variant === variantRejected ?
										<ClearIcon /> :
										<img src={location + icon} alt={altIcon} />
									}
								</Avatar>
							</ListItemAvatar>
							<ListItemText>
								<EvaTypography
									variant='body1'
								>
									{parseJsonToHtml(
										body,
										optionRemoveRootParrNode)
									}
								</EvaTypography>
							</ListItemText>
						</ListItem>
					))}
				</List>
				<div className={coverageContainerNotification}>
					{(coverageNotification) ?
						<HealthAlert
							variant={coverageNotification.info}
							content={
								parseJsonToHtml(
									coverageNotification.body,
									optionRemoveRootParrNode)
							}
							withIcon
						/>
						: <></>
					}
				</div>
			</div>
		</div>
	)
}

export default DisencumbranceCoverageCard
