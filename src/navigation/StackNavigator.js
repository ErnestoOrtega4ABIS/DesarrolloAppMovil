import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AhorrosScreen from "../screens/AhorrosScreen";
import ConfigScreen from "../screens/ConfigScreen";
import PerfilScreen from "../screens/PerfilScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#17202a',  // Cambia el color de la barra de navegación
          },
          headerTintColor: '#fff',  // Cambia el color del texto del header
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title:'Inicio' }}/>
        <Stack.Screen name="Ahorros" component={AhorrosScreen} options={{ title:'Ahorros' }}/>
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil' }}/>
        <Stack.Screen name="Config" component={ConfigScreen} options={{ title: 'Config' }}/>
        </Stack.Navigator>
    );
}