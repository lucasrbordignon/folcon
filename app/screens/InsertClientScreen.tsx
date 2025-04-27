import { useNavigation } from 'expo-router';
import { ChevronLeft, Info } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // Importa o hook

export default function InsertClientScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets(); 
  return (
    <View className="flex-1">
      <View
        className="bg-white"
        style={{ paddingTop: insets.top }}
      >
        <View className="flex-row items-center justify-between px-4 py-3">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex-row items-center"
          >
            <ChevronLeft size={24} color="#0d9488" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-teal-800">Cliente</Text>
          <TouchableOpacity>
            <Info size={24} color="#0d9488" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Conteúdo da tela */}
      <View className="flex-1 bg-gray-100 px-4 py-4">
        <View className="mb-6">
          <Text className="text-sm font-semibold text-gray-600 mb-2">Principal</Text>
          <TextInput
            placeholder="Nome completo"
            value="Lucas Rodrigues Bordignon"
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mb-4 text-gray-800"
          />
          <TextInput
            placeholder="CPF"
            value="405.856.778-32"
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-800"
          />
        </View>

        <View>
          <Text className="text-sm font-semibold text-gray-600 mb-2">Contato</Text>
          <TextInput
            placeholder="Email"
            value="lucas.r.bordignon@gmail.com"
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mb-4 text-gray-800"
          />
          <View className="flex-row justify-between">
            <TextInput
              placeholder="Instagram"
              value="lucasrbordignon.dev"
              className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 mr-2 text-gray-800"
            />
            <TextInput
              placeholder="Telefone"
              value="(15) 99136-0221"
              className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-800"
            />
          </View>
        </View>
      </View>
    </View>
  );
}