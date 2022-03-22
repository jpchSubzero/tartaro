
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

import moduleModalStyles from "./Modal.module.scss";
import EvaButton from '../EvaButton';


/**
 * Modal component
 * @param {boolean} props.open Indicates the status of the modal (if it is open or closed)
 * @param {function} props.handleOpen Manage the modal opening event
 * @param {function} props.handleClose Manages the modal closing event
 * @param {node} props.children Child element used to display content
 * @param {string} props.variant Indicates the type of modal used: (optional)
 * 		normal (Default if not set)
 * 		large
 * @param {string} props.className Indicates a class name to overwrite the modal
 * @param {string} props.classNameBody Indicates a class name to overwrite the body of the modal
 * @returns
 */

const EvaModal = (props) => {
	const {
		open,
		handleOpen,
		handleClose,
		children,
		variant,
		className,
		classNameBody,
		...propsModal } = props;

	const evaBodyStyle = classNames(moduleModalStyles["modal-eva__body"], {
		[moduleModalStyles["modal-eva__body--normal"]]: !variant || variant === "normal",
		[moduleModalStyles["modal-eva__body--large"]]: variant === "large",
	});
	const evaModalStyle = moduleModalStyles["modal-eva"];
	const evaFooterStyle = moduleModalStyles["modal-eva__footer"];
	const evaBodyContainerStyle = moduleModalStyles["modal-eva__body-container"];
	const evaModalCloseStyle = moduleModalStyles["modal-eva_close"];
	const evaModalCustomStyle = propsModal.className ? propsModal.className : "";

	const body = (
		<Fade in={open}>
			<div className={`${evaBodyStyle} ${evaModalCustomStyle} ${classNameBody}`}>
				<div className={evaModalCloseStyle}>
					<EvaButton type='submit'
						variant='text'
						buttonSize='small'
						className={moduleModalStyles['modal-eva_close__button']}
						startIcon={<CloseIcon />}
						onClick={handleClose}
					/>
				</div>
				<div className={evaBodyContainerStyle}>
					{children}
				</div>
				<div className={evaFooterStyle}>
				</div>
			</div>
		</Fade>
	);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				BackdropComponent={Backdrop}
				className={`${evaModalStyle} ${className}`}
				{...propsModal}
			>
				{body}
			</Modal>
		</div>
	)
}

export default EvaModal;
