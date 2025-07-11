import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const createThreeButtonAlert = () => {
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

export default function Search() {
  return (
    <TouchableWithoutFeedback >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View className="bg-white px-4 py-4 w-full shadow-custom">
          <View className="rounded-full bg-zinc-100 border border-zinc-200 flex flex-row items-center justify-between px-4">
            <TextInput            
              placeholder="O que você deseja ver?"               
              className='flex-1 placeholder:text-zinc-400 text-base'
            />
            <Pressable onPress={createThreeButtonAlert}>
              <Ionicons name="search" size={24} color="#a1a1aa"/>
            </Pressable>
          </View>   
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback >    
  )
} 

