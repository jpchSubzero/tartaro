import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import variables from "../../scss/_variables.module.scss";
import "./EvaSpinner.scss";

const useStyles = makeStyles((theme) => ({
	root: {
		/* 	color: "#FFDD00", */
		color: variables.primaryColor400,
		/* display: "flex",
		"& > * + *": {
			marginLeft: theme.spacing(2),
		}, */
	},
	/* colorPrimary: {
		backgroundColor: "blue",
	},
	secondary: {
		backgroundColor: variables.primaryColor,
	}, */
}));

function EvaCircularProgress() {
	const classes = useStyles();

	return (
		<div>
			<CircularProgress
				variant='determinate'
				className={classes.root}
				value={50} /* {...props} */
			/>
			<CircularProgress color='secondary' className={classes.root} />
		
		</div>
	);
}

export default EvaCircularProgress;



