import { contactHomeType } from '@/types/contactHomeTypes';
import { selectColorFromStatus } from '@/utils/getStatusInfoFromContact';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

type ContactCardsProps = {
  items: contactHomeType[];
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export default function ContactCards({ items }: ContactCardsProps) {
  const itemHeight = 130;

  const renderItem = (item: contactHomeType) => (
    <View
      className="w-full bg-white rounded-md px-4 py-3 mb-3 relative shadow-custom flex"
      style={{
        height: itemHeight,
        borderLeftWidth: 5,
        borderLeftColor: selectColorFromStatus(item.status),
      }}
    >
      <Text
        className="absolute right-4 top-3 p-1 rounded-md text-zinc-100 text-xs uppercase"
        style={{ backgroundColor: selectColorFromStatus(item.status) }}
      >
        {item.status}
      </Text>

      <Text className="text-xl font-bold text-teal-950 mb-1">{item.interest}</Text>

      <Text className="text-zinc-600 text-base mb-3" numberOfLines={2}>
        {item.observation}
      </Text>

      <View className="flex-row justify-between items-center absolute left-4 right-4 bottom-3">
        <View className="flex-row items-center gap-1">
          <Ionicons name="person" size={18} color="#64748b" />
          <Text className="text-sm text-zinc-700">{item.client.name}</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Ionicons name="calendar" size={18} color="#64748b" />
          <Text className="text-sm text-zinc-700">{formatDate(item.contactedAt)}</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Ionicons name="cash" size={18} color="#0d9488" />
          <Text className="text-base text-zinc-700">{item.budgets}</Text>
        </View>
      </View>
    </View>
  );

  const renderHiddenItem = () => (
    <View
      className="flex-row justify-between items-center bg-gray-200 rounded-md mb-2 mx-1"
      style={{ height: itemHeight }}
    >
      <TouchableOpacity
        className="bg-green-600 w-1/2 rounded-l-md flex items-start justify-center"
        style={{ height: itemHeight }}
        onPress={() => console.log('Finalizar')}
      >
        <View className="w-[75px] items-center">
          <Ionicons name="checkmark" size={24} color="white" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-red-600 w-1/2 rounded-r-md flex items-end justify-center"
        style={{ height: itemHeight }}
        onPress={() => console.log('Excluir')}
      >
        <View className="w-[75px] items-center">
          <Ionicons name="trash" size={24} color="white" />
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
      leftOpenValue={75}
      rightOpenValue={-75}
      stopLeftSwipe={90}
      stopRightSwipe={-90}
      swipeToOpenPercent={40}
      swipeToOpenVelocityContribution={0.1}
    />
  );
}