import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {
    // Obtener dimensiones de pantalla
    const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator 
        // Para ubicar la barra a la derecha
        screenOptions={{
            // Si la pantalla está en forVerticalIOS, menor a 768, usa front y sino permanent que hace que el menú esté siempre fijo
            drawerType: width >= 768 ? "permanent" : "front"
        }}
        drawerContent={ (props) => <InternalMenu {...props}/>}
      >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


// const InternalMenu = (props:DrawerContentComponentProps) => {
const InternalMenu = ({ navigation }:DrawerContentComponentProps) => {
  // return <Text>Hola mundo111</Text>;
  return(
    <DrawerContentScrollView>
      {/* Contenedor del avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }}
        style={styles.avatar}
        />
      </View>

      {/* Opciones del menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={ () => navigation.navigate("StackNavigator") }
        >
          <Text style={ styles.menuItem }>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={ () => navigation.navigate("SettingsScreen") }
        >
          <Text style={ styles.menuItem }>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
