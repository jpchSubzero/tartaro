import EvaSelectField from './index'

export default function Example() {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%', marginLeft: 20 }}>

                    <EvaSelectField fieldlabel='Field Label' disabled
                        helpertext='This is the description area' />
                </div>
                <div style={{ width: '20%', marginLeft: 20 }}>

                    <EvaSelectField fieldlabel='Field Label' />
                </div>
                <div style={{ width: '20%', marginLeft: 20 }}>

                    <EvaSelectField fieldlabel='Field Label'
                        helpertext='This is the description area' />
                </div>
                <div style={{ width: '20%', marginLeft: 20 }}>
                    <EvaSelectField error fieldlabel='Field Label'
                        helpertext='This is the description area' />
                </div>
            </div>

        </div>
    )
}
