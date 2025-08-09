import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from '@expo-google-fonts/syne';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Navigation from './navigation';
import { COLORS } from './constants/colors';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fontsLoaded] = useFonts({
    
    'NordicClub': require('./assets/fonts/NordicClub.otf'),
    'NordicClub-Oblique': require('./assets/fonts/NordicClub-Oblique.otf'),
    
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    
    Syne_400Regular,
    Syne_500Medium,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
  });

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  
  if (showSplash) {
    return <SplashScreen onAnimationFinish={handleSplashFinish} />;
  }

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LinearGradient
          colors={COLORS.HOME_GRADIENT}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color={COLORS.TEXT_PRIMARY} />
          <Text style={{ 
            color: COLORS.TEXT_PRIMARY, 
            marginTop: 16, 
            fontSize: 16,
            fontWeight: '600'
          }}>
            Loading BrandPeek...
          </Text>
        </LinearGradient>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#0B0F19" />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
