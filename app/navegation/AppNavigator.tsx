
import { MainTabs } from '@/components/layout/MainTabs';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import InsertClientScreen from '../screens/ClientScreen';
import InsertContactScreen from '../screens/ContactScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />

        <Stack.Screen
          name="InsertContactScreen"
          component={InsertContactScreen}          
        />
        <Stack.Screen 
          name="InsertClientScreen" 
          component={InsertClientScreen}            
        />        
      </Stack.Navigator>
    </PaperProvider>
  );
};

export default AppNavigator;
