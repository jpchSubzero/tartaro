import EvaTextField from "./index";
import EvaButton from "../EvaButton";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CreditCardIcon from '@material-ui/icons/CreditCard';

export default function exampleInputs() {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaTextField
                        disabled
                        placeholder='disabled'
                        fieldlabel='Field Label'
                        helperText='This is the description area'

                    />
                </div>
                <div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaTextField
                        placeholder='Ingresa tu numero de cedula'
                        fieldlabel='Field Label'

                    />
                </div>
                <div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaTextField

                        placeholder='Ingresa tu numero de cedula'
                        fieldlabel='Field Label'
                        helperText='This is the description area'

                    />
                </div>
                <div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaTextField
                        startAdormentIcon={<CreditCardIcon />}

                        placeholder='Ingresa tu numero de cedula'
                        fieldlabel='Field Label'
                        helperText='This is the description area'

                    />
                </div>
                {<div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaTextField
                        endAdormentIcon={<AttachMoneyIcon />}
                        placeholder='Ingresa tu numero de cedula'
                        fieldlabel='Field Label'
                        helperText='This is the description area'

                    />
                </div>}
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaTextField
                        placeholder='Ingresa tu numero de cedula'
                        fieldlabel='Field Label'
                        helperText='This is the description area'
                        error={true}
                    />
                </div>
                <div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaTextField
                        endAdormentIcon={<AttachMoneyIcon />}
                        placeholder='Ingresa tu numero de cedula'
                        fieldlabel='Field Label'
                        helperText='This is the description area'
                    /* error={true} */
                    />
                </div>
                <div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaButton type='submit'
                        variant='contained'

                        buttonSize='large'
                    >
                        Enviar
                    </EvaButton>
                </div>
                <div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaButton type='submit'
                        variant='outlined'

                        buttonSize='large'
                    /* 	onClick={handleClick} */
                    >
                        Cancelar
                    </EvaButton>
                </div>
            </div>
        </>
    )
}
