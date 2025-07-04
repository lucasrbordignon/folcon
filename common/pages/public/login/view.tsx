import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import useLoginViewModel from "./view.models";

export const LoginView: React.FC = () => {
  const { email, isLoading, onSubmit, setEmail, password, setPassword, error, goToRegister } =
    useLoginViewModel();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Ajuste conforme header se tiver
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 bg-white">
          <View className="h-2/5 bg-zinc-100 items-center justify-center">
            <Image
              source={require('@/assets/images/logoNome.png')}
              style={{ height: 128}} 
              resizeMode="contain"
            />
          </View>

          <View className="flex-1 -mt-16 bg-white rounded-tl-[60px] px-8 pt-10 ">            
            <Text className="text-center pb-20 text-4xl z-50 font-light text-teal-900">Login</Text>
            <Text className="text-teal-900/80 text-lg font-semibold mb-1">Email</Text>
            <TextInput
              className="bg-gray-100 rounded-xl text-xl px-4 py-4 mb-8 text-black"
              value={email}
              onChangeText={setEmail}
              placeholder="usuario@mail.com"
              placeholderTextColor="#999"
            />
          
            <Text className="text-teal-900/80 text-lg font-semibold mb-1">Senha</Text>
            <View className="flex-row items-center bg-gray-100 rounded-xl mb-8 px-4">
              <TextInput
                className="flex-1 text-xl py-4 text-black"
                value={password}
                onChangeText={setPassword}
                placeholder="•••••••"
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword((v) => !v)}>
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#64748b"
                />
              </TouchableOpacity>
            </View>

            {error ? <Text className="text-red-500 mb-3">{error}</Text> : null}

            <TouchableOpacity
              onPress={onSubmit}
              disabled={isLoading}
              className="bg-teal-700 border border-teal-500 disabled:bg-teal-600/50 py-4 rounded-xl items-center mb-6"
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white text-xl font-semibold">Entrar</Text>
              )}
    
            </TouchableOpacity>
            <View className="flex-row justify-center">
              <Text className="text-gray-500 text-lg">Não tem uma conta?</Text>
              <TouchableOpacity onPress={() => goToRegister()}>
                <Text className="text-teal-700/80 text-lg font-semibold ml-1">Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
