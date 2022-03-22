import moduleStyles from "./EvaTypography.module.scss";


/**
 * EvaTypography Component
 * @param {string} props.variant Indicates the
 * typeface variant to be implemented
 * by the component
 * @returns EvaTypography Component
 */
export default function EvaTypography(props) {
	let modulesClassName = "";
	switch (props.variant) {
		case "h1":
			modulesClassName = moduleStyles.h1;
			break;
		case "h2":
			modulesClassName = moduleStyles.h2;
			break;
		case "h3":
			modulesClassName = moduleStyles.h3;
			break;
		case "h4":
			modulesClassName = moduleStyles.h4;
			break;
		case "h5":
			modulesClassName = moduleStyles.h5;
			break;
		case "subtitle1":
			modulesClassName = moduleStyles.subtitle1;
			break;
		case "subtitle1.semibold":
			modulesClassName = moduleStyles["subtitle1--semibold"];
			break;
		case "subtitle1.bold":
			modulesClassName = moduleStyles["subtitle1--bold"];
			break;
		case "subtitle2":
			modulesClassName = moduleStyles.subtitle2;
			break;
		case "subtitle2.semibold":
			modulesClassName = moduleStyles["subtitle2--semibold"];
			break;
		case "subtitle2.bold":
			modulesClassName = moduleStyles["subtitle2--bold"];
			break;
		case "body1":
			modulesClassName = moduleStyles.body1;
			break;
		case "body1.medium":
			modulesClassName = moduleStyles["body1--medium"];
			break;
		case "body2":
			modulesClassName = moduleStyles.body2;
			break;
		case "body2.medium":
			modulesClassName = moduleStyles["body2--medium"];
			break;
		case "body2.bold":
			modulesClassName = moduleStyles["body2--bold"];
			break;
		case "helper1":
			return (
				<span style={props.style} className={moduleStyles.helper1}>
					{props.children}
				</span>
			);
		case "helper1.bold":
			return (
				<span
					style={props.style}
					className={`${moduleStyles["helper1--bold"]} ${props.className}`}
				>
					{props.children}
				</span>
			);
		case "helper2":
			return (
				<span style={props.style} className={moduleStyles.helper2}>
					{props.children}
				</span>
			);
		case "helper2.medium":
			return (
				<span
					style={props.style}
					className={`${moduleStyles["helper2--medium"]} ${props.className}`}
				>
					{props.children}
				</span>
			);
		default:
			return (
				<span style={props.style} className={props.className}>
					{props.children}
				</span>
			);
	}

	const propsClassName = props.className ? props.className : "";
	return (
		<div
			className={`${modulesClassName} ${propsClassName}`}
			style={props.style}
		>
			{props.children}
		</div>
	);
}
