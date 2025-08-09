import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, RADIUS } from '../constants/theme';

export default function CircularGradientIcon({ 
  size = 56, 
  gradientIndex = 0,
  style 
}) {
 
  const gradients = [
    COLORS.ICON_GRADIENT_1, 
    COLORS.ICON_GRADIENT_2, 
    COLORS.ICON_GRADIENT_3, 
  ];

  const selectedGradient = gradients[gradientIndex % gradients.length];

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <LinearGradient
        colors={selectedGradient}
        style={[styles.gradient, { borderRadius: size / 2 }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
