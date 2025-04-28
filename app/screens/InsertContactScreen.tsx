import Header from '@/components/Header';
import { useNavigation } from 'expo-router';
import { ChevronDown, ChevronLeft, Info, Plus, Search } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function InsertContactScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [client, setClient] = useState('');
  const [contactDate, setContactDate] = useState('');
  const [contactTime, setContactTime] = useState('');
  const [channel, setChannel] = useState('');
  const [interest, setInterest] = useState('');
  const [observation, setObservation] = useState('');
  const [budgetDescription, setBudgetDescription] = useState('');
  const [budgetValue, setBudgetValue] = useState('');
  const [budgets, setBudgets] = useState([{ description: '', value: '' }]);

  // Função para adicionar um novo orçamento
  const handleAddBudget = () => {
    setBudgets([...budgets, { description: '', value: '' }]);
  };

  // Função para atualizar um orçamento específico
  const handleUpdateBudget = (index: number, field: 'description' | 'value', value: string) => {
    const updatedBudgets = [...budgets];
    updatedBudgets[index][field] = value;
    setBudgets(updatedBudgets);
  };

  // Função para remover um orçamento
  const handleRemoveBudget = (index: number) => {
    const updatedBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(updatedBudgets);
  };

  return (
    <View className="flex-1">
      <View className="bg-white pb-2 relative">
        <Header />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute left-2 z-10"
          style={{ paddingTop: insets.top + 14 }}
        >
          <ChevronLeft size={48} color="#0d9488" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 bg-gray-100 px-4">
        <View className="flex-row justify-between items-center mb-4 mt-4">
          <Text className="text-teal-900 text-4xl font-semibold">Contato</Text>
          <TouchableOpacity>
            <Info size={32} color="#0d9488" />
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <Text className="text-xl font-semibold text-teal-600 mb-2">Cliente</Text>
          <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
            <TextInput
              placeholder="Cliente"
              className="flex-1 text-gray-800"
              placeholderTextColor="#9CA3AF"
              value={client}
              onChangeText={setClient}
            />
            <TouchableOpacity>
              <Search size={20} color="#0d9488" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-xl font-semibold text-teal-600 mb-2">Contato</Text>
          <View className="flex-row justify-between w-full gap-4">
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-500 mb-2">Data</Text>
              <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                <TextInput
                  placeholder="Data do contato"
                  className="flex-1 text-gray-800"
                  placeholderTextColor="#9CA3AF"
                  value={contactDate}
                  onChangeText={setContactDate}
                />
              </View>
            </View>

            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-500 mb-2">Hora</Text>
              <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                <TextInput
                  placeholder="Hora do contato"
                  className="flex-1 text-gray-800"
                  placeholderTextColor="#9CA3AF"
                  value={contactTime}
                  onChangeText={setContactTime}
                />
              </View>
            </View>
          </View>

          <View className="mt-4">
            <Text className="text-base font-semibold text-gray-500 mb-2">Canal</Text>
            <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
              <TextInput
                placeholder="Canal"
                className="flex-1 text-gray-800"
                placeholderTextColor="#9CA3AF"
                value={channel}
                onChangeText={setChannel}
              />
              <ChevronDown size={20} color="#0d9488" />
            </View>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-xl font-semibold text-teal-600 mb-2">Interesse</Text>
          <TextInput
            placeholder="Interesse"
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mb-4 text-gray-800"
            placeholderTextColor="#9CA3AF"
            value={interest}
            onChangeText={setInterest}
          />
          <TextInput
            placeholder="Observação"
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-800"
            placeholderTextColor="#9CA3AF"
            value={observation}
            onChangeText={setObservation}
            multiline
            numberOfLines={4}
          />
        </View>

        <View className="mb-6">
          <Text className="text-xl font-semibold text-teal-600 mb-2">Orçamentos</Text>
          {budgets.map((budget, index) => (
            <View key={index} className="flex-row justify-between w-full mb-4">
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-500 mb-2">Descrição</Text>
                <View className="flex-row items-center bg-white border border-gray-300 rounded-l-lg px-3 py-2">
                  <TextInput
                    placeholder="Descrição"
                    className="flex-1 text-gray-800"
                    placeholderTextColor="#9CA3AF"
                    value={budget.description}
                    onChangeText={(value) => handleUpdateBudget(index, 'description', value)}
                  />
                </View>
              </View>

              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-500 mb-2">Valor</Text>
                <View className="flex-row items-center bg-white border border-gray-300 rounded-r-lg px-3 py-2">
                  <TextInput
                    placeholder="Valor"
                    className="flex-1 text-gray-800"
                    placeholderTextColor="#9CA3AF"
                    value={budget.value}
                    onChangeText={(value) => handleUpdateBudget(index, 'value', value)}
                  />
                </View>
              </View>              
            </View>
          ))}
          <TouchableOpacity
            onPress={handleAddBudget}
            className="w-12 h-12 bg-teal-600 rounded-full justify-center items-center self-center mt-4"
          >
            <Plus size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}