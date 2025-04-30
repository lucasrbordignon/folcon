import { clientListTypes } from '@/types/clientListTypes';
import { Trash } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

type ContactCardsProps = {
  items: clientListTypes[]
}

function formatarCPF(cpf: string): string {
  const cpfNumeros = cpf.replace(/\D/g, '');

  return cpfNumeros.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4'
  );
}

function formatarCelular(numero: string): string {
  const numeroLimpo = numero.replace(/\D/g, '');

  return numeroLimpo.replace(
    /(\d{2})(\d{5})(\d{4})/,
    '($1) $2-$3'
  );
}

export default function ClientCards({ items }: ContactCardsProps) {
  const itemHeight = 168; // Altura fixa para os itens

  const renderItem = (item: clientListTypes) => (
    <View
      className="w-full bg-white rounded-md px-2 py-4 my-2 relative shadow-custom"
      style={{ height: itemHeight }} // Define a altura fixa
    >
      <View className="flex gap-1">
        <Text className="text-2xl font-semibold text-teal-950">{item.name}</Text>
      </View>

      <View className="flex flex-row justify-between mt-4">
        <View className="flex w-1/3 gap-1">
          <Text className="font-semibold text-zinc-400">CPF</Text>
          <Text>{formatarCPF(item.cpf)}</Text>
        </View>
        <View className="flex w-2/3 gap-1">
          <Text className="font-semibold text-zinc-400">Instagram</Text>
          <Text>{item.instragramId}</Text>
        </View>
      </View>

      <View className="flex flex-row justify-between mt-4">
        <View className="flex w-1/3 gap-1">
          <Text className="font-semibold text-zinc-400">Telefone</Text>
          <Text>{formatarCelular(item.cellPhone)}</Text>
        </View>
        <View className="flex w-2/3 gap-1">
          <Text className="font-semibold text-zinc-400">Email</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    </View>
  );

  const renderHiddenItem = () => (
    <View
      className="flex-row justify-end items-center rounded-md my-2 mx-1"
      style={{ height: itemHeight }} 
    >
      <TouchableOpacity
        className="bg-red-600 w-1/2 rounded-r-md flex items-end justify-center"
        style={{ height: itemHeight }}
        onPress={() => console.log('Excluir')}
      >
        <View className="w-[75px] items-center">
          <Trash size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderItem(item)}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-75}
      stopLeftSwipe={5}
      stopRightSwipe={-90}
      swipeToOpenPercent={40}
      swipeToOpenVelocityContribution={0.1}
    />
  );
}