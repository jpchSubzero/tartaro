import EvaCard from './index'
import logoCard from "../../assets/card/icon-card-test.png";
import { Grid } from "@material-ui/core";
import addIcon from "../../assets/preguntas/Add.svg";

const exampleCard = () => {

	const handleClickExample = () =>{
		console.log("Click en elemento");
	}

	return (
		<div>
			<Grid container>
				<Grid item style={{ display: "contents" }} >

					<div style={{ margin: "50px" }}>
						Variant regular.filled
						<EvaCard
							srcImgCard = {logoCard}
							altImg = "Imagen de prueba"
							titleText = "$40.000"
							subTitleText = "Muerte Acidental"
							bodyText ="Cubirmos cualquier accidente para el titular"
							buttonText ="Cotizar seguro"
							variant = "regular.filled"
							onClick = { () => handleClickExample() }
						/>
					</div>

					<div style={{ margin: "50px" }}>
						Variant regular.text
						<EvaCard
							srcImgCard = {logoCard}
							altImg = "Imagen de prueba"
							titleText = "$40.000"
							subTitleText = "Muerte Acidental"
							bodyText ="Cubirmos cualquier accidente para el titular"
							buttonText ="Cotizar seguro"
							buttonStartIcon={<img src={addIcon} alt="imagen de mas" />}
							variant = "regular.text"
							onClick = { () => handleClickExample() }
						/>
					</div>

					<div style={{ margin: "50px" }}>
						Varitant acction, not button
						<EvaCard
							srcImgCard = {logoCard}
							altImg = "Imagen de prueba"
							titleText = "Solo para mi"
							bodyText ="Cubirmos cualquier accidente para el titular"
							variant = "acction"
							onClick = { () => handleClickExample() }
						/>
					</div>

					<div style={{ margin: "50px" }}>
						<EvaCard
							disabled
							srcImgCard = {logoCard}
							altImg = "Imagen de prueba"
							titleText = "$40.000"
							subTitleText = "Muerte Acidental"
							bodyText ="Cubirmos cualquier accidente para el titular"
							buttonText ="Cotizar seguro"
							variant = "regular.filled" //regular.filled regular.text - button
							onClick = { () => handleClickExample() }
						/>
					</div>

					<div style={{ margin: "50px" }}>
						<EvaCard
							disabled
							srcImgCard = {logoCard}
							altImg = "Imagen de prueba"
							titleText = "$40.000"
							subTitleText = "Muerte Acidental"
							bodyText ="Cubirmos cualquier accidente para el titular"
							buttonText ="Cotizar seguro"
							variant = "regular.text" //regular.filled regular.text - button
							onClick = { () => handleClickExample() }
						/>
					</div>

					<div style={{ margin: "50px" }}>
						<EvaCard
							disabled
							srcImgCard = {logoCard}
							altImg = "Imagen de prueba"
							titleText = "Solo para mi"
							bodyText ="Cubirmos cualquier accidente para el titular"
							variant = "acction" //regular - button
							onClick = { () => handleClickExample() }
						/>
					</div>

				</Grid>
			</Grid>
		</div>
	)
}

export default exampleCard
