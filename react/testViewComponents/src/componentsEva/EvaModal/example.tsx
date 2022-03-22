import React from 'react'
import EvaModal from './index'
import logoTest from "../../assets/card/icon-card-test.png";
import { Grid } from "@material-ui/core";
import EvaButton from "../EvaButton/index";
import EvaTypography from '../EvaTypography';
import EvaTextField from '../EvaTextField';


const ExampleModal = () => {

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	const [openLarge, setOpenLarge] = React.useState(false);

	const handleOpenLarge = () => {
		setOpenLarge(true);
	};

	const handleCloseLarge = () => {
		setOpenLarge(false);
	};

	const [openImage, setOpenImage] = React.useState(false);

	const handleOpenImage = () => {
		setOpenImage(true);
	};

	const handleCloseImage = () => {
		setOpenImage(false);
	};


	const handleClick = () => {
		console.log("Objeto realizado click")
	};

	const bodyModal1 = (
		<>
			<Grid container >
				<Grid item md={12} lg={12} sm={12} xs={12}>
					<EvaTypography variant="h5">
						Añade tu beneficiario.
					</EvaTypography>
					<EvaTypography variant="body2">
						Ingresa sus datps y el porcentaje que recibiria.
					</EvaTypography>
					<div style={{ width: '100%', paddingTop: 16 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
					<div style={{ width: '100%', paddingTop: 20 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
					<div style={{ width: '100%', paddingTop: 20 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
					<div style={{ width: '100%', paddingTop: 20 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
					<div style={{ width: '100%', paddingTop: 20 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
					<div style={{ width: '100%', paddingTop: 20 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
					<div style={{ width: '100%', paddingTop: 20 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
					<div style={{ width: '100%', paddingTop: 20 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
					<div style={{ width: '100%', paddingTop: 20 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
					<div style={{ width: '100%', paddingTop: 20, paddingBottom: 45 }}>
						<EvaTextField
							placeholder='Ingresa tu numero de cedula'
							fieldlabel='Field Label'

						/>
					</div>
				</Grid>
			</Grid>
			<Grid container >
				<Grid item md={6} lg={6} sm={6} xs={12}
				style={{paddingLeft: 5, paddingRight:12}}
				>
					<EvaButton type='submit'
						variant='outlined'
						onClick={handleClick}
					>
						Cancelar
					</EvaButton>
				</Grid>
				<Grid item md={6} lg={6} sm={6} xs={12}
				style={{paddingLeft:15, paddingRight:5}}
				>
					<EvaButton type='submit'
						variant='contained'
						onClick={handleClick}
					>
						Enviar
					</EvaButton>
				</Grid>
			</Grid>

		</>
	);


	const bodyModal2 = (
		<>
			<Grid container
				style={{ paddingBottom: 200 }}
				justifyContent="center"
				alignItems="center"
				>
				<Grid item
				>
					<EvaTypography variant="h5">
						Añade tu beneficiario.
					</EvaTypography>
					<EvaTypography variant="body2">
						Ingresa sus datos y el porcentaje que recibiria.
					</EvaTypography>
				</Grid>
			</Grid>
			<Grid container
				justifyContent="center"
				alignItems="center"
				>
				<Grid item sm={6}>
					<EvaButton type='submit'
						variant='contained'
						onClick={handleClick}
					>
						Enviar
					</EvaButton>
				</Grid>
			</Grid>
		</>
	);

	const bodyModal3 = (
		<>
			<Grid container
				style={{ paddingBottom: 200 }}
				justifyContent="center"
				alignItems="center"
				>
				<Grid item
				>
					<img src={logoTest}
					style={{ width: 120 }}
					alt="test"
					/>
				</Grid>
			</Grid>
		</>
	);


	return (
		<div >
			<Grid container >
				<Grid item >
					<div style={{ margin: "50px" }} >
						<EvaButton type='submit'
							variant='contained'
							onClick={handleOpen}
						>
							Modal normal
						</EvaButton>

						<EvaModal
							open={open}
							handleOpen={handleOpen}
							handleClose={handleClose}
						>
							{bodyModal1}
						</EvaModal>
					</div>

					<div style={{ margin: "50px" }}>
						<EvaButton type='submit'
							variant='contained'
							onClick={handleOpenLarge}
						>
							Modal large
						</EvaButton>

						<EvaModal
							open={openLarge}
							handleOpen={handleOpenLarge}
							handleClose={handleCloseLarge}
							variant="large"
						>
							{bodyModal2}
						</EvaModal>
					</div>


					<div style={{ margin: "50px" }}>
						<EvaButton type='submit'
							variant='contained'
							onClick={handleOpenImage}
						>
							Modal image
						</EvaButton>

						<EvaModal
							open={openImage}
							handleOpen={handleOpenImage}
							handleClose={handleCloseImage}
						>
							{bodyModal3}
						</EvaModal>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default ExampleModal
