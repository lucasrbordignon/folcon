import Header from '@/components/layout/Header'
import ContactCards from '@/components/ui/ContactCards'
import DateDropdown from '@/components/ui/DateHomeDropdown'
import Search from '@/components/ui/Search'
import SortOrderDropdown from '@/components/ui/SortOrderDropdown'
import StatusDropdown from '@/components/ui/StatusHomeDropdown'
import { contactHomeType } from '@/types/contactHomeTypes'
import { isToday, isYesterday, subDays } from 'date-fns'
import { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import mockData from '../../data/mockData.json'

type statusFilterType = 'aberto' | 'finalizado' | 'cancelado' | 'todos'
type dateFilterType = 'hoje' | 'ontem' | 'ultimos7dias' | 'ultimos30dias' | 'todos'
type sortOrderType = 'newest' | 'oldest';

export default function HomeScreen() {

  const [items, setItems] = useState<contactHomeType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<statusFilterType>('aberto');
  const [selectedDateFilter, setSelectedDateFilter] = useState<dateFilterType>('hoje')
  const [sortOrder, setSortOrder] = useState<sortOrderType>('newest');

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

  const sortedItems = [...filteredItems].sort((a, b) => {
    const dateA = new Date(a.contactedAt).getTime();
    const dateB = new Date(b.contactedAt).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <View className='flex-1'>
      <Header />
      <Search />
      <Text className='text-teal-900 text-4xl font-semibold px-4 mt-3'>
        Contatos
      </Text>      

      <View className='flex flex-row px-4' style={{ overflow: 'hidden' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SortOrderDropdown selected={sortOrder} onChange={setSortOrder} />
          <StatusDropdown selected={selectedFilter} onChange={setSelectedFilter} />
          <DateDropdown selected={selectedDateFilter} onChange={setSelectedDateFilter} />
        </ScrollView>
      </View>
      
      <View className='px-4 flex-1'>
        <ContactCards items={sortedItems}/>     
      </View>
       
    </View>
  )
}