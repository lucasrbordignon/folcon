import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { PrivateStackParamList } from '@/types/navigation';
import InsertClientScreen from '../app/screens/ClientScreen';
import InsertContactScreen from '../app/screens/ContactScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator<PrivateStackParamList>();

export const PrivateStack = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="InsertContactScreen" component={InsertContactScreen} />
        <Stack.Screen name="InsertClientScreen" component={InsertClientScreen} />
      </Stack.Navigator>
    </PaperProvider>
  );
};