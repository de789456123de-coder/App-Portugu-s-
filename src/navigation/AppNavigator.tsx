import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Modulo63Screen } from '../screens/Modulo63Screen';
import { Modulo64Screen } from '../screens/Modulo64Screen';
import { ExerciciosScreen } from '../screens/ExerciciosScreen';

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Modulo63" component={Modulo63Screen} />
        <Stack.Screen name="Modulo64" component={Modulo64Screen} />
        <Stack.Screen name="Exercicios" component={ExerciciosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
