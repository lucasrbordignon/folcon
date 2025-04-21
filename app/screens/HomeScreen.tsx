import ContactCards from '@/components/ContactCards'
import DateDropdown from '@/components/DateHomeDropdown'
import Header from '@/components/Header'
import Search from '@/components/Search'
import StatusDropdown from '@/components/StatusHomeDropdown'
import mockData from '@/data/mockData.json'
import { contactHomeType } from '@/types/contactHomeTypes'
import { isToday, isYesterday, subDays } from 'date-fns'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

type statusFilterType = 'aberto' | 'finalizado' | 'cancelado' | 'todos'
type dateFilterType = 'hoje' | 'ontem' | 'ultimos7dias' | 'ultimos30dias' | 'todos'

export default function HomeScreen() {

  const [items, setItems] = useState<contactHomeType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<statusFilterType>('aberto');
  const [selectedDateFilter, setSelectedDateFilter] = useState<dateFilterType>('hoje')

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setItems(mockData.contatos);
    };

    fetchData();
  }, []);  

  const filterByDate = (items: contactHomeType[], filter: dateFilterType): contactHomeType[] => {
    const today = new Date();
    let filteredItems = [];

    switch (filter) {
      case 'hoje':
        filteredItems = items.filter(item => isToday(new Date(item.contactedAt)));
        break;
      case 'ontem':
        filteredItems = items.filter(item => isYesterday(new Date(item.contactedAt)));
        break;
      case 'ultimos7dias':
        filteredItems = items.filter(item => new Date(item.contactedAt) >= subDays(today, 7));
        break;
      case 'ultimos30dias':
        filteredItems = items.filter(item => new Date(item.contactedAt) >= subDays(today, 30));
        break;
      case 'todos':
      default:
        filteredItems = items;
        break;
    }

    return filteredItems;
  }

  const filteredItems = selectedFilter === 'todos'
    ? filterByDate(items, selectedDateFilter) 
    : filterByDate(items.filter(item => item.status === selectedFilter), selectedDateFilter); 

  return (
    <View className='flex-1'>
      <Header />
      <Search />
      <Text className='text-teal-900 text-4xl font-semibold px-4 mt-3'>
        Contatos
      </Text>      

      <View className='flex flex-row'>      
        <StatusDropdown selected={selectedFilter} onChange={setSelectedFilter} />
        <DateDropdown selected={selectedDateFilter} onChange={setSelectedDateFilter} />
      </View>
      
      <View className='px-4 flex-1'>
        <ContactCards items={filteredItems}/>     
      </View>
       
    </View>
  )
}