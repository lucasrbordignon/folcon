import Header from '@/components/Header';
import { useNavigation } from 'expo-router';
import { ChevronLeft, InfoIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function InsertClientScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets(); 

  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const formatarCPF = (valor: string): string => {
    const cpfNumeros = valor.replace(/\D/g, ''); 
    return cpfNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatarTelefone = (valor: string): string => {
    const telefoneNumeros = valor.replace(/\D/g, '');
    return telefoneNumeros.replace(
      /(\d{2})(\d{5})(\d{4})/,
      '($1) $2-$3'
    );
  };

  const handleEmailChange = (valor: string) => {
    setEmail(valor);
  };

  const handlePhoneChange = (valor: string) => {
    const telefoneNumeros = valor.replace(/\D/g, '');
    setPhone(formatarTelefone(telefoneNumeros));
  };

  const validarEmail = (valor: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(valor);
  };

  const handleCpfChange = (valor: string) => {
    const cpfNumeros = valor.replace(/\D/g, ''); 
    setCpf(formatarCPF(cpfNumeros)); 
  };

  const cpfSemMascara = cpf.replace(/\D/g, '');
  const cpfIsValid = cpfSemMascara.length === 11;
  
  return (
    <View className="flex-1">
      <View className='bg-white pb-2 relative'>
        <Header/>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='absolute left-2 z-10' style={{ paddingTop: insets.top + 14}}
          >
            <ChevronLeft size={48} color="#0d9488" />
        </TouchableOpacity>
      </View>
      
      <View className="flex-1 bg-gray-100 px-4">
        <View className="flex-row justify-between items-center mb-4 mt-4">        
          <Text className='text-teal-900 text-4xl font-semibold'>
            Lead
          </Text> 
          <TouchableOpacity>
            <InfoIcon size={32} color="#0d9488"/>
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <Text className="text-xl font-semibold text-teal-600 mb-2">Principal</Text>
          <Text className="text-base font-semibold text-gray-500 mb-2">Nome completo</Text>
          <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
            <TextInput
              placeholder="Insira o nome completo"
              className="flex-1 text-gray-800"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <Text className="text-base font-semibold text-gray-500 mb-2 mt-4">CPF</Text>
          <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
            <TextInput
              placeholder="Insira o CPF"
              className="flex-1 text-gray-800"
              keyboardType="numeric"
              returnKeyType="done"
              value={cpf}
              onChangeText={handleCpfChange}
              placeholderTextColor="#9CA3AF"
            />              
          </View>
        </View>

        <View>
          <Text className="text-xl font-semibold text-teal-600 mb-2">Contato</Text>
          <Text className="text-base font-semibold text-gray-500 mb-2">Email</Text>
          <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
            <TextInput
              placeholder="Insira um Email válido"
              className="flex-1 text-gray-800"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />              
          </View>
          {/* {!validarEmail(email) && email.length > 0 && (
            <Text className="text-red-500 text-sm mt-1">Email inválido</Text>
          )} */}
          <View className="flex-row justify-between w-full gap-4 mt-4">
            <View className='flex-1'>
              <Text className="text-base font-semibold text-gray-500 mb-2">Instagram</Text>
              <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                <TextInput
                  placeholder="@Instagram"
                  className="flex-1 text-gray-800"
                  placeholderTextColor="#9CA3AF"
                />           
              </View>
            </View>
            
            <View className='flex-1'>
              <Text className="text-base font-semibold text-gray-500 mb-2">Telefone</Text>
              <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                <TextInput
                  placeholder="Insira um telefone válido"
                  className="flex-1 text-gray-800"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  value={phone}
                  onChangeText={handlePhoneChange}
                />              
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}