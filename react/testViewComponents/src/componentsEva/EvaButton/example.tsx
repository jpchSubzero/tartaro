import EvaButton from "./index";
import AddIcon from '@material-ui/icons/Add';
import addIcon from "../../assets/preguntas/Add.svg";
import { Grid } from "@material-ui/core";

const exampleButton = () => {

	const handleClick = () => {
		console.log("Objeto realizado click")
	};

	return (
		<div>
			<Grid container>
				{/* Filled */}
				<Grid item  >
					<p style={{ margin: "25px" }}>Filled</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'extraLarge'
							onClick={handleClick}
						>
							Extra large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'large'
							onClick={handleClick}
						>
							Large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							onClick={handleClick}
						>
							Medium Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'small'
							onClick={handleClick}
						>
							Small Button
						</EvaButton>
					</div>

					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							disabled
							onClick={handleClick}
						>
							medium disabled Button
						</EvaButton>
					</div>
				</Grid>

				{/* Filled + icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>Filled + icon</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'extraLarge'
							startIcon={<img src={addIcon} alt="imagen de mas" />}
							onClick={handleClick}
						>
							Extra large  Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'large'
							startIcon={<AddIcon fontSize="large"/>}
							onClick={handleClick}
						>
							Large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Medium Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'small'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Small Button
						</EvaButton>
					</div>

					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							disabled
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							medium disabled Button
						</EvaButton>
					</div>

				</Grid>

				{/* Outlined */}
				<Grid item >
					<p style={{ margin: "25px" }}>outlined</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'extraLarge'
							onClick={handleClick}
						>
							Extra large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'large'
							onClick={handleClick}
						>
							Large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							onClick={handleClick}
						>
							Medium Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'small'
							onClick={handleClick}
						>
							Small Button
						</EvaButton>
					</div>

					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							disabled
							onClick={handleClick}
						>
							medium disabled Button
						</EvaButton>
					</div>
				</Grid>

				{/* Outlined + icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>outlined + icon</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'extraLarge'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Extra large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'large'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Medium Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'small'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Small Button
						</EvaButton>
					</div>

					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							disabled
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							medium disabled Button
						</EvaButton>
					</div>
				</Grid>

				{/* Text */}
				<Grid item >
					<p style={{ margin: "25px" }}>text</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							buttonSize = 'extraLarge'
							onClick={handleClick}
						>
							Extra large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							buttonSize = 'large'
							onClick={handleClick}
						>
							Large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							onClick={handleClick}
						>
							Medium Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							buttonSize = 'small'
							onClick={handleClick}
						>
							Small Button
						</EvaButton>
					</div>

					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							disabled
							onClick={handleClick}
						>
							medium disabled Button
						</EvaButton>
					</div>
				</Grid>

				{/* Text + icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>text + icon</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							buttonSize = 'extraLarge'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Extra large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							buttonSize = 'large'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Medium Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							buttonSize = 'small'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Small Button
						</EvaButton>
					</div>

					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							disabled
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							medium disabled Button
						</EvaButton>
					</div>
				</Grid>

				{/* Filled only icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>Filled only icon</p>
					<p style={{ margin: "25px" }}>Large Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'large'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>Small Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'small'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium disabled Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							disabled
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>

				</Grid>

				{/* outlined only icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>outlined only icon</p>
					<p style={{ margin: "25px" }}>Large Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'large'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>Small Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'small'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium disabled Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							disabled
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>

				</Grid>

				{/* text only icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>text only icon</p>
					<p style={{ margin: "25px" }}>Large Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							buttonSize = 'large'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>Small Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							buttonSize = 'small'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium disabled Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='text'
							disabled
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>

				</Grid>

				{/* Rounded filled only icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>Rounded filled only icon</p>
					<p style={{ margin: "25px" }}>Large Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant="contained"
							rounded
							buttonSize = 'large'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant="contained"
							rounded
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>Small Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant="contained"
							rounded
							buttonSize = 'small'
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium disabled Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant="contained"
							rounded
							disabled
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>

				</Grid>

				{/* Rounded outlined only icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>Rounded outlined only icon</p>
					<p style={{ margin: "25px" }}>Large Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'large'
							rounded
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							rounded
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>Small Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							buttonSize = 'small'
							rounded
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium disabled Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='outlined'
							rounded
							disabled
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>

				</Grid>

				{/* Filled secondary */}
				<Grid item  >
					<p style={{ margin: "25px" }}>Filled secondary</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'extraLarge'
							secondary
							onClick={handleClick}
						>
							Extra large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'large'
							secondary
							onClick={handleClick}
						>
							Large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							secondary
							onClick={handleClick}
						>
							Medium Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'small'
							secondary
							onClick={handleClick}
						>
							Small Button
						</EvaButton>
					</div>

					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							disabled
							secondary
							onClick={handleClick}
						>
							medium disabled Button
						</EvaButton>
					</div>
				</Grid>

				{/* Filled secondary+ icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>Filled secondary + icon</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'extraLarge'
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Extra large  Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'large'
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Large Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Medium Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'small'
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							Small Button
						</EvaButton>
					</div>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							disabled
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
							medium disabled Button
						</EvaButton>
					</div>

				</Grid>

				{/* Filled secondary only icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>Filled secondary only icon</p>
					<p style={{ margin: "25px" }}>Large Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'large'
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>Small Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'small'
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium disabled Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant='contained'
							disabled
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>

				</Grid>

				{/* Rounded filled only icon*/}
				<Grid item >
					<p style={{ margin: "25px" }}>Rounded filled secondary only icon</p>
					<p style={{ margin: "25px" }}>Large Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant="contained"
							rounded
							buttonSize = 'large'
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant="contained"
							rounded
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>Small Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant="contained"
							rounded
							buttonSize = 'small'
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>
					<p style={{ margin: "25px" }}>medium disabled Button</p>
					<div style={{ display: "center", margin: "25px" }}>
						<EvaButton type='submit'
							variant="contained"
							rounded
							disabled
							secondary
							startIcon={<AddIcon/>}
							onClick={handleClick}
						>
						</EvaButton>
					</div>

				</Grid>

			</Grid>
		</div>
	)
}

export default exampleButton
