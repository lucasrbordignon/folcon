
import { MainTabs } from '@/components/MainTabs';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import InsertClientScreen from './screens/InsertClientScreen';
import InsertContactScreen from './screens/InsertContactScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <PaperProvider>
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
