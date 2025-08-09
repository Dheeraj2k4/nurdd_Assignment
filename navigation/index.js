import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BrandDetailScreen from '../screens/BrandDetailScreen';
import { ROUTES } from '../constants/routes';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    >
      <Stack.Screen 
        name={ROUTES.HOME} 
        component={HomeScreen}
        options={{
          title: 'BrandPeek'
        }}
      />
      <Stack.Screen 
        name={ROUTES.BRAND_DETAIL} 
        component={BrandDetailScreen}
        options={{
          title: 'Brand Details'
        }}
      />
    </Stack.Navigator>
  );
}
