import React from "react";
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import useLoginViewModel from "./view.models";

export const RegisterView: React.FC = () => {
  const { email, isLoading, onSubmit, setEmail, password, setPassword, error } =
    useLoginViewModel();

  return (
    <View className="flex-1 bg-white">
      <View className="h-1/3 bg-zinc-100 items-center justify-center">
        <Image
          source={require('../../../assets/images/logoNome.png')}
          style={{ height: 128}} 
          resizeMode="contain"
        />
      </View>

      <View className="flex-1 -mt-16 bg-white rounded-tl-[70px] px-8 pt-10">
        <Text className="text-4xl text-center font-light text-teal-900 mt-10 mb-20">Login</Text>

        <Text className="text-teal-900/80 font-semibold mb-1">Email</Text>
        <TextInput
          className="bg-gray-100 rounded-xl text-lg px-4 py-3 mb-6 text-black"
          value={email}
          onChangeText={setEmail}
          placeholder="usuario@mail.com"
          placeholderTextColor="#999"
        />
      
        <Text className="text-teal-900/80 font-semibold mb-1">Senha</Text>
        <TextInput
          className="bg-gray-100 rounded-xl text-lg px-4 py-3 mb-6 text-black"
          value={password}
          onChangeText={setPassword}
          placeholder="•••••••"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {error ? <Text className="text-red-500 mb-3">{error}</Text> : null}

        <TouchableOpacity
          onPress={onSubmit}
          disabled={isLoading}
          className="bg-teal-600 border border-teal-400 disabled:bg-teal-600/50 py-4 rounded-xl items-center mb-6"
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-lg font-semibold">Entrar</Text>
          )}
 
        </TouchableOpacity>
        <View className="flex-row justify-center">
          <Text className="text-gray-500">Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text className="text-teal-600/80 font-semibold ml-1">Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
