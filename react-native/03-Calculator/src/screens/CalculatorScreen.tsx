import React/*, { useRef, useState }*/ from 'react'
import { Text, View } from 'react-native'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../themes/AppTheme'

// enum Operators {
//     addition, 
//     subtraction, 
//     multiplication, 
//     division
// }

export const CalculatorScreen = () => {
    const lightGray = '#9B9B9B';
    const orange = '#FF9427';
    const numberOfLines = 1;

    const {        
        clearScreen,
        buildNumber,
        setSignus,
        deleteNumber,
        additionOperation,
        subtractionOperation,
        multiplicationOperation,
        divisionOperation,
        calculate,
        result,
        previousResult
    } = useCalculator();

    // const [result, setResult] = useState<string>('0');
    // const [previousResult, setPreviousResult] = useState<string>('0');
    // const lastOperation = useRef<Operators>();

    // const clearScreen = () => {
    //     setResult('0');
    //     setPreviousResult('0');
    // }

    // const buildNumber = (value:string) => {
    //     let newResult = result;
    //     if (value === '.') {
    //         newResult = result.includes('.') ? newResult : result + value;
    //     } else {
    //         newResult = result !== '0' ? result + value : value;
    //     }
    //     setResult(newResult);
    // }

    // const setSignus = () => {
    //     if (result !== '0') {
    //         setResult(result.startsWith('-') ? result.replace('-', '') : '-' + result);
    //     }
    // }

    // const deleteNumber = () => {
    //     if (result !== '0') {
    //         let newResult = result.substring(0, result.length - 1);
    //         newResult === '-' || newResult === '-0' ? setResult('0') : setResult(newResult);
    //     } 
    // }

    // const moveResultToPrevious = () => {
    //     setPreviousResult(result.endsWith('.') ? result.substring(0, result.length - 1) : result);
    //     setResult('0');
    // }

    // const additionOperation = () => {
    //     calculate();
    //     moveResultToPrevious();
    //     lastOperation.current = Operators.addition;
    // }

    // const subtractionOperation = () => {
    //     calculate();
    //     moveResultToPrevious();
    //     lastOperation.current = Operators.subtraction;
    // }

    // const multiplicationOperation = () => {
    //     calculate();
    //     moveResultToPrevious();
    //     lastOperation.current = Operators.multiplication;
    // }

    // const divisionOperation = () => {
    //     calculate();
    //     moveResultToPrevious();
    //     lastOperation.current = Operators.division;
    // }

    // const calculate = () => {
    //     const operator1 = Number(result);
    //     const operator2 = Number(previousResult);
    //     let resultOperation:number = 0.0;
        
    //     switch (lastOperation.current) {
    //         case Operators.addition:
    //             resultOperation = operator1 + operator2;
    //             break;
    //         case Operators.subtraction:
    //             resultOperation = operator2 - operator1;
    //             break;
    //         case Operators.multiplication:
    //             resultOperation = operator1 * operator2;
    //             break;
    //         case Operators.division:
    //             resultOperation = operator2 / operator1;
    //             break;
    //     }
    //     if (lastOperation.current !== undefined) {
    //         setResult(resultOperation.toString());
    //         setPreviousResult('0');       
    //         lastOperation.current = undefined;
           
    //     }
    // }

    return (
        <View style={styles.calculatorContainer}>
            {
                previousResult !== '0' && <Text style={styles.subResult}>{previousResult}</Text>
            }
            <Text 
                style={styles.result} 
                numberOfLines={numberOfLines}
                adjustsFontSizeToFit
            >{result}</Text>
            <View style={styles.buttonRow}>
                <CalculatorButton label="C" color={lightGray} labelColor="black" onPress={clearScreen} />
                <CalculatorButton label="+/-" color={lightGray} labelColor="black" onPress={setSignus} />
                <CalculatorButton label="del" color={lightGray} labelColor="black" onPress={deleteNumber} />
                <CalculatorButton label="/" color={orange} onPress={divisionOperation} />
            </View>
            <View style={styles.buttonRow}>
                <CalculatorButton label="7" onPress={buildNumber}/>
                <CalculatorButton label="8" onPress={buildNumber} />
                <CalculatorButton label="9" onPress={buildNumber} />
                <CalculatorButton label="x" color={orange} onPress={multiplicationOperation} />
            </View>
            <View style={styles.buttonRow}>
                <CalculatorButton label="4" onPress={buildNumber} />
                <CalculatorButton label="5" onPress={buildNumber} />
                <CalculatorButton label="6" onPress={buildNumber} />
                <CalculatorButton label="-" color={orange} onPress={subtractionOperation} />
            </View>
            <View style={styles.buttonRow}>
                <CalculatorButton label="1" onPress={buildNumber} />
                <CalculatorButton label="2" onPress={buildNumber} />
                <CalculatorButton label="3" onPress={buildNumber} />
                <CalculatorButton label="+" color={orange} onPress={additionOperation} />
            </View>
            <View style={styles.buttonRow}>
                <CalculatorButton label="0" extends onPress={buildNumber} />
                <CalculatorButton label="." onPress={buildNumber} />
                <CalculatorButton label="=" color={orange} onPress={calculate} />
            </View>
        </View>
    )
}
