import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

// export const Page1Screen = (props: Props) => {
export const Page1Screen = ({navigation}: Props) => {
  //   console.log(props);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      {/* <Button 
        title="Ir a persona"
        onPress={() => navigation.navigate("PersonScreen")}
      /> */}

      <Text style={{marginVertical: 20, fontSize: 18}}>Navegar con argumentos</Text>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity
          style={{
            ...styles.buttonLarge,
            backgroundColor: "#5856D6"
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.buttonLargeText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.buttonLarge,
            backgroundColor: "#FF9427"
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'María',
            })
          }>
          <Text style={styles.buttonLargeText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
