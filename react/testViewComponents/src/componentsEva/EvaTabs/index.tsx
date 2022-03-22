import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import classNames from 'classnames';
import { withStyles } from "@material-ui/styles";
import TabPanel from "./evaTabPanel";

import variables from "../../scss/_variables.module.scss";
import moduleTabStyle from './EvaTabs.module.scss';

function a11yProps(index) {
	return {
		id: `tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

// TAB STYLES from material UI (normal)
const CustomTabNormal = withStyles({
	root: {
		fontFamily: variables.fontBody,
		border: "1px solid ",
		borderColor: variables.neutralColor500,
		"&:first-child": {
			marginRight: "0px",
			marginLeft: "0px",
		},
		"&:last-child": {
			marginRight: "0px",
			marginLeft: "0px",
		},
	},
	selected: {
		transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		backgroundColor: variables.primaryColor100,
		border: '1px solid',
		borderColor: variables.primaryColor400
	},
	disabled:{
		opacity:`0.4 !important`
	}
})(Tab);

// TAB STYLES from material UI (icon)
const CustomTabIcon = withStyles({
	root: {
		fontFamily: variables.fontSubHeadings,
		color: variables.neutralColor700,
		"&:first-child": {
			marginRight: "0px",
			marginLeft: "0px",
		},
		"&:last-child": {
			marginRight: "0px",
			marginLeft: "0px",
		},
	},
	selected: {
		transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		color: variables.primaryColor500,
		fontFamily: variables.fontSubHeadingsSemibold,
	},
	disabled:{
		opacity: `0.4 !important`,
	},
	'@media (max-width: 600px)': {
		root: {
			fontFamily: variables.fontHelpers,
		},
		selected: {
			fontFamily: variables.fontHelpersMedium,
		}
	}
})(Tab);


/**
 * Tab element
 * @param {JSON} props.tabsElements Element that contains the data of the tab,
 *  fotmat JSON, it is made up of the following sections:
 * 		id: id of the element (required)
 * 		icon: Icon of the element is only used in the variant
 * 			of tabs type icon (optional)
 * 		titleTab: tab title (required)
 * 		body: node type element used in the panel (required)
 * 		propsPanel: Props, all kinds of properties can be sent (optional)
 * 		propsTab: Props of the individual tabs,
 * 			you can send all kinds of properties (optional)
 * @param {string} props.variant The type of tab to be displayed (normal/icon)
 * @returns The tab element
 */

export default function EvaTabs(props) {

	const {
		tabsElements,
		variant,
		...propsTabs } = props;

	const evaTabIndicator = classNames({
		[moduleTabStyle["tab-eva--indicator__normal"]]: !variant || variant === "normal",
		[moduleTabStyle["tab-eva--indicator__icon"]]: variant === "icon",
	});
	const evaTabElementStyle = classNames({
		[moduleTabStyle["tab-eva--button__normal"]]: !variant || variant === "normal",
		[moduleTabStyle["tab-eva--button__icon"]]: variant === "icon",
	});
	const evaTabPanelStyle = moduleTabStyle["tab-eva--panel"];

	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="Tabs Eva"
				variant="fullWidth"
				{...propsTabs}
				className={evaTabPanelStyle}
				TabIndicatorProps={{ className: evaTabIndicator }}
			>
				{tabsElements.map(({ id, icon, titleTab, propsTab }) => (
					(!variant || variant === "normal") ?
						<CustomTabNormal
							key={id}
							label={titleTab}
							disableRipple
							{...propsTab}
							className={evaTabElementStyle}
							{...a11yProps(id)}
						/>
						:
						<CustomTabIcon
							key={id}
							label={titleTab}
							disableRipple
							icon={icon}
							{...propsTab}
							className={evaTabElementStyle}
							{...a11yProps(id)}
						/>

				))}
			</Tabs>
			{tabsElements.map(({ id, body, propsPanel }) => (
				<TabPanel
					key={id}
					index={id}
					value={value}
					{...propsPanel}
					>
					{body}
				</TabPanel>
			))}
		</>
	);
}
