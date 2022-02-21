import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // 1 significa que ocupa todo el espacio disponible pero depende del padre, si el padre no tiene configurado un valor el hijo ocupará el espacio mínimo
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    fontSize: 20,
    width: '100%',
    borderWidth: 3,
    // padding: '15%'
    paddingHorizontal: '10%',
    paddingVertical: '10%',
    margin: '10%'
    // backgroundColor: 'red'
  }
});