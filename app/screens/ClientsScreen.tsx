import Header from '@/components/layout/Header'
import ClientCards from '@/components/ui/ClientCards'
import Search from '@/components/ui/Search'
import { clientListTypes } from '@/types/clientListTypes'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import mockData from '../../data/mockData.json'

export default function ClientsScreen() {

  const [items, setItems] = useState<clientListTypes[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setItems(mockData.clientes);
    };

    fetchData();
  }, []);  

  return (
    <View className='flex-1'>
      <Header />
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