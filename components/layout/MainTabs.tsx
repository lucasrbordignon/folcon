
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import InsertClientScreen from '../../app/screens/ClientScreen';
import ClientScreen from '../../app/screens/ClientsScreen';
import InsertContactScreen from '../../app/screens/ContactScreen';
import HomeScreen from '../../app/screens/HomeScreen';

const Tab = createBottomTabNavigator();

const homeIcon = () => (<Ionicons name='home' strokeWidth={2} size={32} color={'#8E8E8E'}/>)
const usersIcon = () => (<Ionicons name='person' strokeWidth={2} size={32} color={'#8E8E8E'}/>)

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  const currentRouteName = state.routes[state.index]?.name;

  const handlePressActions: Record<string, () => void> = {
    Home: () => {
      navigation.navigate(InsertContactScreen)
    },
    Profile: () => {
      navigation.navigate(InsertClientScreen)
    },
  };

  return (
    <View className='flex-row justify-between items-center bg-white py-3 shadow-lg'>
      <View       
        className='absolute top-[-50%] text-center left-1/2 transform -translate-x-1/2'
        style={[
          {
            zIndex: 10,
          },
        ]}
      >
        <TouchableOpacity
          className='w-20 h-20 bg-teal-600 border border-teal-400 rounded-full justify-center items-center shadow-lg'
          onPress={handlePressActions[currentRouteName]}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 10,
          }}
        >
          <Ionicons name="add" size={48} color="#fff" />
        </TouchableOpacity>
      </View>

      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;        

        let icon = route.name === 'Home' ?  homeIcon() : usersIcon();
        if (isFocused) icon = React.cloneElement(icon, { color: '#0d9488' });

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            className='flex-1 py-4 items-center'
          >
            {icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const MainTabs = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ClientScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};