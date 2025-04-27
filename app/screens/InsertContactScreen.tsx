import { useNavigation } from 'expo-router';
import { ChevronDown, ChevronLeft, Info, Plus, Search } from 'lucide-react-native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function InsertContactScreen() {

  const navigation = useNavigation();
  const insets = useSafeAreaInsets(); 

  return (
    <View className='flex-1'>
      <View className='bg-white' style={{ paddingTop: insets.top }}>
      <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color="#0d9488" />
      </TouchableOpacity>
    </View>
      <View className="flex-1 bg-gray-100 px-4 py-4">
        <View className="flex-row justify-between items-center mb-4">        
          <Text className="text-2xl font-bold text-teal-800">Contato</Text>
          <TouchableOpacity>
            <Info size={24} color="#0d9488" />
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-semibold text-gray-600 mb-2">Cliente</Text>
          <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
            <TextInput
              placeholder="Cliente"
              className="flex-1 text-gray-800"
            />
            <TouchableOpacity>
              <Search size={20} color="#0d9488" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-semibold text-gray-600 mb-2">Contato</Text>
          <View className="flex-row justify-between">
            <TextInput
              placeholder="Data do contato"
              className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 mr-2 text-gray-800"
            />
            <TextInput
              placeholder="H. do contato"
              className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 mr-2 text-gray-800"
            />
            <View className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 flex-row items-center">
              <TextInput
                placeholder="Canal"
                className="flex-1 text-gray-800"
              />
              <ChevronDown size={20} color="#0d9488" />
            </View>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-semibold text-gray-600 mb-2">Interesse</Text>
          <TextInput
            placeholder="Interesse"
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mb-4 text-gray-800"
          />
          <TextInput
            placeholder="Observação"
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-800"
            multiline
            numberOfLines={4}
          />
        </View>

        <View className="mb-6">
          <Text className="text-sm font-semibold text-gray-600 mb-2">Orçamentos</Text>
          <View className="flex-row justify-between items-center mb-4">
            <TextInput
              placeholder="Descrição"
              className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 mr-2 text-gray-800"
            />
            <TextInput
              placeholder="Valor"
              className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-800"
            />
          </View>
          <TouchableOpacity className="w-12 h-12 bg-teal-600 rounded-full justify-center items-center self-center">
            <Plus size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}