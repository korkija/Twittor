import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TwittorsList, TwittorDetails, Authorization} from '../screens';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
      }}
      tabBarOptions={{
        showIcon: false,
        // labelPosition: 'beside-icon',
        labelStyle: {
          fontSize: 20,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Twittor List',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
        name="TwittorsList"
        component={TwittorsList}
      />
      <Tab.Screen
        options={{
          title: 'Twit',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="TwittorDetails"
        component={TwittorDetails}
      />
      <Tab.Screen
        options={{title: 'Authorization'}}
        name="Authorization"
        component={Authorization}
      />
    </Tab.Navigator>
  );
};

export default AppTab;
