import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import useSinginViewModel from "./view.models";

export const RegisterView: React.FC = () => {
  const { email, isLoading, onSubmit, setEmail, password, error, setPassword, setConfirmPassword , confirmPassword, goToLogin } =
    useSinginViewModel();

  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <View className="h-1/5 bg-teal-700 items-center justify-center">
        <Text className="text-5xl flex-1 text-center font-light text-zinc-100 mt-10 mb-20">Singin</Text>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="absolute left-2 z-10" 
          style={{ position: "absolute", left: 10, top: 30, zIndex: 20, }}
        >
          <MaterialIcons name="chevron-left" size={48} color="white" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 -mt-16 bg-white rounded-tl-[60px] px-8 pt-20">   

        <Text className="text-teal-900/80 font-semibold text-lg mb-1">Email</Text>
        <TextInput
          className="bg-gray-100 rounded-xl text-xl px-4 py-4 mb-8 text-black"
          value={email}
          onChangeText={setEmail}
          placeholder="usuario@mail.com"
          placeholderTextColor="#999"
        />
      
        <Text className="text-teal-900/80 font-semibold text-lg mb-1">Sua senha</Text>
        <TextInput
          className="bg-gray-100 rounded-xl text-xl px-4 py-4 mb-8 text-black"
          value={password}
          onChangeText={setPassword}
          placeholder="•••••••"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <Text className="text-teal-900/80 font-semibold text-lg mb-1">Confirme sua senha</Text>
        <TextInput
          className="bg-gray-100 rounded-xl text-xl px-4 py-4 mb-8 text-black"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="•••••••"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {error ? <Text className="text-red-500 mb-3">{error}</Text> : null} 

        <TouchableOpacity
          onPress={onSubmit}
          disabled={isLoading}
          className="bg-teal-700 border border-teal-500 disabled:bg-teal-600/50 py-4 rounded-xl items-center mb-6"
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-xl font-semibold">Cadastrar</Text>
          )}
 
        </TouchableOpacity>
        <View className="flex-row justify-center">
          <Text className="text-gray-500 text-lg">Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => goToLogin()}>
            <Text className="text-teal-700/80 text-lg font-semibold ml-1">Entre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
