import React from 'react'
import { View } from 'react-native';
import { styles } from './TaskStyles/10';

export const TaskScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.violetBox} />
        <View style={styles.orangeBox} />
        <View style={styles.blueBox} />
    </View>
  )
}

