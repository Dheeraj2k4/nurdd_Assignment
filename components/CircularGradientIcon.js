import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, RADIUS } from '../constants/theme';

/**
 * CircularGradientIcon - Bright radial gradient icon component
 * Used for brand cards with purple → blue → pink gradients
 */
export default function CircularGradientIcon({ 
  size = 56, 
  gradientIndex = 0,
  style 
}) {
  // Rotate through different gradient combinations
  const gradients = [
    COLORS.ICON_GRADIENT_1 || ['#7C3AED', '#06B6D4', '#EC4899'], // Purple → blue → pink
    COLORS.ICON_GRADIENT_2 || ['#06B6D4', '#EC4899', '#7C3AED'], // Blue → pink → purple
    COLORS.ICON_GRADIENT_3 || ['#EC4899', '#7C3AED', '#06B6D4'], // Pink → purple → blue
  ];

  const selectedGradient = gradients[gradientIndex % gradients.length] || gradients[0];

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
