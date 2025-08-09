import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Blue Animated Gradient Component for Brand Detail Screen
 * Uses a sophisticated blue gradient with multiple color stops
 */
export default function DarkAnimatedGradient({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={[
          '#001A4D', // Deep navy
          '#002966', // Dark blue
          '#003D99', // Medium blue
          '#0052CC', // Brighter blue
          '#001A4D', // Back to deep navy
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {children && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001A4D', // fallback background
  },
  content: {
    flex: 1,
    zIndex: 1, // Ensure content appears above the gradient
  },
});
