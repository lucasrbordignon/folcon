import FilterCollapse, { DateFilterType, StatusFilterType } from "@/components/filters/FilterCollapse";
import HeaderDrawer from '@/components/layout/HeaderDrawer';
import ContactCards from '@/components/ui/ContactCards';
import Search from '@/components/ui/Search';
import { contactHomeType } from '@/types/contactHomeTypes';
import { isToday, isYesterday, subDays } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import mockData from '../../data/mockData.json';

function filterByDate(items: contactHomeType[], filter: DateFilterType): contactHomeType[] {
  const today = new Date();
  switch (filter) {
    case 'hoje':
      return items.filter(item => isToday(new Date(item.contactedAt)));
    case 'ontem':
      return items.filter(item => isYesterday(new Date(item.contactedAt)));
    case 'ultimos7dias':
      return items.filter(item => new Date(item.contactedAt) >= subDays(today, 7));
    case 'ultimos30dias':
      return items.filter(item => new Date(item.contactedAt) >= subDays(today, 30));
    case 'todos':
    default:
      return items;
  }
}

function filterByStatus(items: contactHomeType[], status: StatusFilterType): contactHomeType[] {
  if (status === 'todos') return items;
  return items.filter(item => item.status === status);
}

function sortNewest(items: contactHomeType[]): contactHomeType[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.contactedAt).getTime();
    const dateB = new Date(b.contactedAt).getTime();
    return dateB - dateA;
  });
}

export default function HomeScreen() {
  const [items, setItems] = useState<contactHomeType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<StatusFilterType>('todos');
  const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilterType>('todos');

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setItems(mockData.contatos);
    };
    fetchData();
  }, []);

  const filteredAndSortedItems = useMemo(() => {
    let result = filterByStatus(items, selectedFilter);
    result = filterByDate(result, selectedDateFilter);
    return sortNewest(result);
  }, [items, selectedFilter, selectedDateFilter]);

  return (
    <View className='flex-1'>
      <HeaderDrawer />
      <Search />

      <FilterCollapse
        description="Últimos contatos"
        selectedStatus={selectedFilter}
        onStatusChange={setSelectedFilter}
        selectedDate={selectedDateFilter}
        onDateChange={setSelectedDateFilter}
      />

      <View className='px-4 flex-1'>
        <ContactCards items={filteredAndSortedItems} />
      </View>
    </View>
  );
}