import {Button} from "@material-ui/core/";
import classNames from "classnames";

import moduleButtonStyles from "./EvaButton.module.scss";
import EvaTypography from "../EvaTypography";

/**
 * Button component that allows customization
 * according to props, it allows sending
 * generic props and for specific styles the
 * following properties are applied
 *
 * @param {node} props.children Specifies the text or child
 * elements sent to the component.
 * @param {string} props.variant Indicates the variant of the
 * button, values ​​are allowed:
 * 		outlined (outlined.rounded)
 * 		contained (contained.rounded)
 * 		text (text.rounded)
 * @param {string} props.buttonSize Text type property,
 * specifies the size of the button, the default
 * value is medium, the allowed values ​​are:
 * 		extraLarge
 * 		large
 * 		medium
 * 		small
 * @param {string} props.classTypography Text type property that
 * indicates a className assigned to the font
 * @param props.startIcon Image type
 * property that allows you to indicate
 *  if an icon is used in the button
 * @param {boolean} props.secondary Boolean type
 * property that indicates if the button
 * is of type "secondary".
 * @param props.style Property that allows
 * to directly assign css styles to the element.
 * @param {boolean} props.disabled Boolean type
 * property that indicates if the element is disabled.
 * @returns Button component
 */


const EvaButton = (props) => {
	const {
		children,
		variant,
		buttonSize,
		rounded,
		secondary,
		classTypography,
		className,
		...propsButton } = props;

	const bottonClass = classNames( [moduleButtonStyles["button-eva"]],{
		[moduleButtonStyles["button-eva--outlined"]]: (variant === "outlined" ),
		[moduleButtonStyles["button-eva--contained"]] : (variant === 'contained' || !variant),
		[moduleButtonStyles["button-eva--text"]] :	(variant === 'text' ),
		[moduleButtonStyles["button-eva--disabled"]] : props.disabled,

		[moduleButtonStyles["button-eva--extra-large"]] : buttonSize === 'extraLarge',
		[moduleButtonStyles["button-eva--large"]] : buttonSize === 'large',
		[moduleButtonStyles["button-eva--small"]] : buttonSize === 'small',
		[moduleButtonStyles["button-eva--medium"]] : buttonSize === 'medium' || !buttonSize,

		[moduleButtonStyles["button-eva--only-icon"]] : !children && propsButton.startIcon,
		[moduleButtonStyles["button-eva--rounded"]] : rounded,
		[moduleButtonStyles["button-eva--secondary"]] : secondary,
	});

	const typographyButton = classNames(moduleButtonStyles["button-eva__tipography"],{
		[moduleButtonStyles["button-eva__tipography--outlined"]]: variant === 'outlined',
		[moduleButtonStyles["button-eva__tipography--contained"]] : variant === 'contained',
		[moduleButtonStyles["button-eva__tipography--text"]] : variant === 'text',
	});

	const customTypographyClass = classTypography ? classTypography : "";
	const customClassName = className ? className: "";

	let typographyVariant ="";

	typographyVariant = (buttonSize === 'small') ?
		'body2': typographyVariant;
	typographyVariant = (!buttonSize || buttonSize === 'medium') ?
		'body1': typographyVariant;
	typographyVariant = (buttonSize === 'large' || buttonSize === 'extraLarge' ) ?
		'body1': typographyVariant;


	return (
		<Button
			fullWidth
			disableRipple
			className={`${bottonClass} ${customClassName}`}
			variant = {variant}
			style={propsButton.style}
			{...propsButton}
			onClick = {() => propsButton.onClick()}
		>
			<EvaTypography variant={typographyVariant}
			className={`${typographyButton} ${customTypographyClass}`} >
				{children}
			</EvaTypography>
		</Button>
	)
}

export default EvaButton
