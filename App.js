import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScreen from './InputScreen';
import HelloScreen from './HelloScreen';
import MineScreen from './MineScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
        <Stack.Screen name="Mine" component={MineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

