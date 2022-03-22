import EvaTabs from './index'
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

const testBody0 = (
	<div>
		esto es una prueba de contendido 0
	</div>

);

const testBody1 = (
	<div>
		esto es una prueba de contendido 1
	</div>

);

const testBody2 = (
	<div>
		esto es una prueba de contendido 2
	</div>

);


const content = [
	{
		id: 0,
		icon: <HeadsetMicIcon />,
		titleTab: "primero",
		body: testBody0,
		propsPanel:{
			style: { background: "transparent" }
		}
	},
	{
		id: 1,
		icon: <HeadsetMicIcon />,
		titleTab: "segundo",
		body: testBody1,
	},
	{
		id: 2,
		icon: <HeadsetMicIcon />,
		titleTab: "tercero",
		body: testBody2,
		propsTab:{
			disabled: true
		},
	},
];




const example = () => {
	return (
		<>
			<div>
				<EvaTabs
					tabsElements={content}
					variant="normal"
				/>
			</div>
			<div>
				<EvaTabs
					tabsElements={content}
					variant="icon"
				/>
			</div>
		</>
	)
}

export default example
