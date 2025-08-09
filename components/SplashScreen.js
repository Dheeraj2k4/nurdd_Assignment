import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { COLORS } from '../constants/theme';

const SplashScreen = ({ onAnimationFinish }) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/open_animation.json')}
        autoPlay
        loop={false}
        speed={2}
        onAnimationFinish={onAnimationFinish}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
