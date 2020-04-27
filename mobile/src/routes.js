import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/Home';
import Add from './screens/Add';
import Cart from './screens/Cart';
import Login from './screens/Login';

const Tabs = createBottomTabNavigator();

const iconTab = (name) => {
  return ({ color, size }) => {
    var iconName;
    switch (name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Add':
        iconName = 'plus';
        break;
      case 'Cart':
        iconName = 'shopping';
        break;
      case 'Login':
        iconName = 'account';
        break;
      default:
        iconName = 'add';
        break;
    }
    return <Icon name={iconName} color={color} size={size} />;
  };
};

export default function Routes() {
  return (
    <>
      <Add />
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#9C27B0',
            inactiveTintColor: '#777',
          }}
        >
          <Tabs.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: iconTab('Home'),
            }}
          />

          <Tabs.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: iconTab('Cart'),
            }}
          />
          <Tabs.Screen
            name="Login"
            component={Login}
            options={{
              tabBarIcon: iconTab('Login'),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </>
  );
}
