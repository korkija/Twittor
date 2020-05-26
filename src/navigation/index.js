import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppTab} from './AppTab';
import {MenuApp} from '../screens/MenuApp';

const Stack = createStackNavigator();

const ScreensStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppStack" component={AppTab} />
      <Stack.Screen name="MenuApp" component={MenuApp} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default ScreensStack;
