import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Dark Animated Background Component for Home Screen
 * Provides a sophisticated dark gradient background
 */
export default function NewAnimatedGradient({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={[
          '#04041c', // 0%
          '#040424', // 20%
          '#04043c', // 40%
          '#040434', // 60%
          '#04044f', // 80%
          '#04045c', // 100%
        ]}
        locations={[0, 0.2, 0.4, 0.6, 0.8, 1]}
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
    backgroundColor: '#04041c', // fallback background
  },
  content: {
    flex: 1,
    zIndex: 1, // Ensure content appears above the background
  },
});
