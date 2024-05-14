import React from 'react';
import Home from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/Screens/Welcome';
import Login from './src/Screens/Login';
import Singup from './src/Screens/Singup';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={Singup} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App