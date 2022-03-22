import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import classNames from "classnames";
import EvaTypography from "../EvaTypography";
import EvaButton from "../EvaButton";
import moduleCardStyles from "./Card.module.scss";


/**
 * Card component
 * @param {string} props.variant Indicates the type of button / action used: (optional)
 * 		regular.text (Default if not set)
 * 		regular.filled
 * 		acction
 * @param {node} props.srcImgCard Image added to card (required)
 * @param {string} props.altImg Text corresponding to the image (optional)
 * @param {string} props.titleText Title shown on the card (required)
 * @param {string} props.subTitleText Sub title shown on the card (Depends on the type of card)
 * @param {string} props.bodyText Text shown on the card (required)
 * @param {string} props.buttonText Text shown on the button (required if variant=regular)
 * @param {node} props.buttonStartIcon Icon shown on the card button (optional)
 * @param {boolean} props.disabled To disable the card
 * @param {string} props.style Personalized card style
 * @returns Card component
 */

const EvaCard = (props) => {

	const {
		variant,
		srcImgCard,
		altImg,
		titleText,
		subTitleText,
		bodyText,
		buttonText,
		buttonStartIcon,
		...propsCard
	} = props;

	const evaCardStyle = classNames(moduleCardStyles["card-eva"], {
		[moduleCardStyles["card-eva--shadow"]]: !buttonText,
		[moduleCardStyles["card-eva--disabled"]]: props.disabled,
		[moduleCardStyles["disabled"]]: (!buttonText && props.disabled),
	});

	const evaCardMediaStyle = classNames(moduleCardStyles["card-eva__media"], {
		[moduleCardStyles["card-eva__media-image--large"]]: !buttonText,
	});

	const evaCardActionStyle = classNames(moduleCardStyles["card-eva__action"], {
		[moduleCardStyles["card-eva__action--filled"]]: (variant === "regular.filled"),
		[moduleCardStyles["card-eva__action--text"]]: (variant === "regular.text"),
		[moduleCardStyles["disabled"]]: props.disabled,
	});

	const evaCardButtonStyle = classNames(moduleCardStyles["card-eva__action-button"], {
		[moduleCardStyles["card-eva__action-button--disabled"]]: props.disabled,
	});

	const evaCardButtonTypographyStyle = classNames({
		[moduleCardStyles["card-eva__action-button--filled"]]: variant === "regular.filled",
		[moduleCardStyles["card-eva__action-button--text"]]: variant === "regular.text",
	});

	const evaCardImageStyle = moduleCardStyles["card-eva__media-image"];
	const evaCardContentStyle = moduleCardStyles["card-eva__content"];
	const evaCardTitleTextStyle = moduleCardStyles["card-eva__content--title"];
	const evaCardSubTitleTextStyle = moduleCardStyles["card-eva__content--subtitle"];
	const evaCardBodyTextStyle = moduleCardStyles["card-eva__content--body"];

	const imgCard = srcImgCard ?
		<div className={evaCardMediaStyle} >
			<img src={srcImgCard}
				alt={altImg}
				className={evaCardImageStyle}
			/>
		</div>
		: <></>;

	const titleCard = titleText ?
		<EvaTypography
			variant='subtitle1.semibold'
			className={evaCardTitleTextStyle} >
			{titleText}
		</EvaTypography>
		: <></>;

	const subTitleCard = subTitleText ?
		<EvaTypography
			variant='body1'
			className={evaCardSubTitleTextStyle}>
			{subTitleText}
		</EvaTypography>
		: <></>;

	const bodyCard = bodyText ?
		<EvaTypography
			variant='body2'
			className={evaCardBodyTextStyle}>
			{bodyText}
		</EvaTypography>
		: <></>;

	const actionsCard = (buttonText) ?
		<CardActions className={evaCardActionStyle}>
			<EvaButton
				type='submit'
				startIcon={buttonStartIcon}
				variant='text'
				{...(props.disabled && { disabled: true })}
				classTypography={evaCardButtonTypographyStyle}
				className={evaCardButtonStyle}
				onClick={() => propsCard.onClick()}>
				Learn More
			</EvaButton>
		</CardActions>
		: <> </>;

	return (
		<div {...((!buttonText && !props.disabled) && { onClick: () => propsCard.onClick() })} >
			<Card
				className={`${evaCardStyle} ${propsCard.className}`}
				variant="outlined"
				style={propsCard.style}
			>
				{imgCard}
				<CardContent
					className={evaCardContentStyle}>
					{titleCard}
					{subTitleCard}
					{bodyCard}
				</CardContent>
				{actionsCard}
			</Card>
		</div>
	)
}

export default EvaCard
