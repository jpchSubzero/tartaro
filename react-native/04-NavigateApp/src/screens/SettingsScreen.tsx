import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {
  // Para obtener el área utilizable obviando los notch
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }}>
        <Text style={styles.title}>
            SettingsScreen
        </Text>
    </View>
  )
}
