// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import CadastroScreen from './CadastroScreen';

const Stack = createStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={App} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        {/* ... mais telas */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
