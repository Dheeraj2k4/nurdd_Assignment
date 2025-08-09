import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function DarkAnimatedGradient({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={[
          '#001A4D', 
          '#002966', 
          '#003D99', 
          '#0052CC',
          '#001A4D',
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
    backgroundColor: '#001A4D', 
  },
  content: {
    flex: 1,
    zIndex: 1, 
  },
});
