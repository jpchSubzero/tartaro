import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

// interface IPerson {
//     id: string;
//     name: string;
// };

// interface Props extends StackScreenProps<any,any>{};

// Utilizar el tipo de dato y nombre de la ruta permitida
interface Props extends StackScreenProps<RootStackParams,"PersonScreen">{};

// export const PersonScreen = (props:Props) => {
export const PersonScreen = ({route, navigation}:Props) => {
    // console.log(props);

    // Convertir los parámetros que llegan a un tipo de dato
    // const params = route.params as IPerson;
    
    // No es necesario convertir porque ya sabe de que tipo es
    const params = route.params;

    useEffect(() => { 
        navigation.setOptions({
        //   title: params?.name
        // Con la interface ya no es necesario validar si existe la propiedad
        //   title: params.name
        // Con el tipado del RootStackParams ya 
          title: params.name
        });
      }, []);
          
  return (
    <View style={styles.globalMargin}>
        {/* <Text style={styles.title}>PersonScreen</Text> */}
        <Text style={styles.title}>{
            JSON.stringify(params, null, 3)
        }</Text>
    </View>
  )
}
