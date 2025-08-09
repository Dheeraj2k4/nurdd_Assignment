import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function NewAnimatedGradient({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={[
          '#04041c', 
          '#040424', 
          '#04043c', 
          '#040434', 
          '#04044f', 
          '#04045c', 
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
    backgroundColor: '#04041c', 
  },
  content: {
    flex: 1,
    zIndex: 1, 
  },
});
