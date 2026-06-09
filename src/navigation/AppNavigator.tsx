import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ModuleScreen } from '../screens/ModuleScreen';
import { LessonScreen } from '../screens/LessonScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ModuleDetail" component={ModuleScreen} />
        <Stack.Screen name="LessonDetail" component={LessonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
