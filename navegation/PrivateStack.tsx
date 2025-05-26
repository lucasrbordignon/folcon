import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { MainTabs } from '@/components/layout/MainTabs';
import InsertClientScreen from '../app/screens/ClientScreen';
import InsertContactScreen from '../app/screens/ContactScreen';

const Stack = createStackNavigator();

export const PrivateStack = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="InsertContactScreen" component={InsertContactScreen} />
        <Stack.Screen name="InsertClientScreen" component={InsertClientScreen} />
      </Stack.Navigator>
    </PaperProvider>
  );
};