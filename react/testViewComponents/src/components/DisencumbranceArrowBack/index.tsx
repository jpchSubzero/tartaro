import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import classNames from "classnames";
import EvaButton from "../../componentsEva/EvaButton/index";

//Llamada a modulo de estilos del componente
import moduleArrowBackStyles from "./HealthArrowBack.module.scss";

const arrowBackStyle = classNames(
	moduleArrowBackStyles['arrow-back-block']);

/**
 * Arrow to navigate
 * @param props.newRoute New route to navigate
 * @param props.propsArrowBack Generic props
 * @returns
 */
const DisencumbranceArrowBack = (props) => {

	const {
		newRoute,
		...propsArrowBack
	} = props;

	const navigate = useNavigate();
	return (
		<div className={arrowBackStyle}>
			<EvaButton type='submit'
				variant='text'
				startIcon={<ArrowBackIosIcon />}
				onClick={() => navigate(newRoute)}
				{...propsArrowBack}
			>
			</EvaButton>
		</div>
	)
}

export default DisencumbranceArrowBack
