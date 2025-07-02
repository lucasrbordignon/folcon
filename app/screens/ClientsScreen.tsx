import HeaderDrawer from '@/components/layout/HeaderDrawer'
import ClientCards from '@/components/ui/ClientCards'
import Search from '@/components/ui/Search'
import { clientListTypes } from '@/types/clientListTypes'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import mockData from '../../data/mockData.json'

export default function ClientsScreen() {

  const [items, setItems] = useState<clientListTypes[]>([]);
  const insets = useSafeAreaInsets();
  
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setItems(mockData.clientes);
    };

    fetchData();
  }, []);  

  return (
    <View className='flex-1'>
      <HeaderDrawer 
        topInset={insets.top} // Ajuste conforme necessário
      />
      <Search />
      <Text className='text-teal-900 text-4xl font-semibold px-4 mt-3'>
        Leads
      </Text>      

      <View className='px-4 flex-1'>
        <ClientCards items={items} />
      </View>
       
    </View>
  )
}