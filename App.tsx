import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Menu/Presentation';
import MultiplicationTableScreen from './Menu/Multiplication';
import NumberAnalysisScreen from './Menu/Numberanalisis1';
import { RootStackParamList } from './Type';
// Bryan Daniel Quiñones Garcia
// 2022-0150

// Crear una instancia de Stack Navigator con los tipos de rutas definidos
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // Contenedor de navegación principal
    <NavigationContainer>
      {/* Definición de las pantallas dentro del Stack Navigator */}
      <Stack.Navigator initialRouteName="Profile">
        {/* Definición de la pantalla de perfil */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* Definición de la pantalla de tabla de multiplicar */}
        <Stack.Screen name="Multiplication Table" component={MultiplicationTableScreen} />
        {/* Definición de la pantalla de análisis de números */}
        <Stack.Screen name="Number Analysis" component={NumberAnalysisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}