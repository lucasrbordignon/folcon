import { contactHomeType } from '@/types/contactHomeTypes';
import { selectColorFromStatus } from '@/utils/getStatusInfoFromContact';
import { Check, HandCoins, Trash } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

type ContactCardsProps = {
  items: contactHomeType[]
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  
  return `${day}/${month}/${year} ${hours}:${minutes}`
}

export default function ContactCards({items}: ContactCardsProps) {
  const [itemHeight, setItemHeight] = React.useState<number>(0);

  const renderItem = (item: contactHomeType) => (
    <View 
      className='w-full bg-white rounded-md px-2 py-4 my-2 relative shadow-custom' 
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        setItemHeight(height);
      }}
    >
      <View className='border border-zinc-400 h-3 w-3 rounded-full absolute right-2 top-2' style={{backgroundColor: selectColorFromStatus(item.status)}}/>

      <View className='flex gap-1'>
        <Text className='text-2xl font-semibold text-teal-950'>{item.interest}</Text>
        <Text className='text-teal-950'>{item.observation}</Text>
      </View>

      <View className='flex flex-row justify-between mt-4'>
        <View className='flex gap-1'>
          <Text className='font-semibold text-zinc-400'>Cliente</Text>
          <Text>{item.client.name}</Text>
        </View>
        <View className='flex gap-1'>
          <Text className='font-semibold text-zinc-400'>Data/Hora</Text>
          <Text>{formatDate(item.contactedAt)}</Text>
        </View>

        <View className='flex flex-row gap-2 px-4 py-1 items-end'>
          <HandCoins color={'#0d9488'} size={18}/>
          <Text>{item.budgets}</Text>
        </View>
      </View>
    </View>
  );

  const renderHiddenItem = () => (
    <View 
      className='flex-row justify-between items-center bg-gray-200 rounded-md my-2 mx-1' 
      style={{ height: itemHeight }}
    >
      <TouchableOpacity 
        className='bg-green-600 w-1/2 rounded-l-md flex items-start justify-center' 
        style={
          { height: itemHeight }
        }
        onPress={() => console.log('Finalizar')}
      >
        <View className='w-[75px] items-center'>        
          <Check size={24} color="white" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        className='bg-red-600 w-1/2 rounded-r-md flex items-end justify-center' 
        style={
          { height: itemHeight }
        }
        onPress={() => console.log('Excluir')}
      >
        <View className='w-[75px] items-center'>  
          <Trash size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => renderItem(item)}
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
