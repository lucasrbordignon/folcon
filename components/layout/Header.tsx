import React from 'react';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ paddingTop: insets.top }} className="items-center bg-white w-full">
      <Image 
        source={require('../../assets/images/logoNome.png')}
        style={{ height: 72 }} 
        resizeMode="contain"
      />
    </View>     
  );
};