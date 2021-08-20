import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ShoppingScreen } from '../screens/shopping/ShoppingScreen';
import { AddShoppingItems } from '../screens/shopping/AddShoppingItems';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Shopping" component={ShoppingScreen} />
      <Stack.Screen name="AddShoppingItems" component={AddShoppingItems} />
    </Stack.Navigator>
  );
};
