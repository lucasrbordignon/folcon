import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function Header() {
  const route = useRoute();
  
  return (
    <SafeAreaView className="items-center w-full bg-white">
      <Text
        className="text-2xl pt-6 font-semibold uppercase text-teal-700"
        style={{ flexShrink: 1, flexWrap: 'wrap', textAlign: 'center', width: '100%' }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {route.name}
      </Text>
    </SafeAreaView>    
  );
};