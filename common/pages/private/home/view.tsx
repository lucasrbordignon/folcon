import FilterCollapse from "@/components/filters/FilterCollapse";
import HeaderDrawer from '@/components/layout/HeaderDrawer';
import ContactCards from '@/components/ui/ContactCards';
import Search from '@/components/ui/Search';
import { View } from 'react-native';
import { useHomeViewModel } from './view.models';

export default function HomeScreen() {
  const {
    items,
    selectedFilter,
    setSelectedFilter,
    selectedDateFilter,
    setSelectedDateFilter,
  } = useHomeViewModel();

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
        <ContactCards items={items} />
      </View>
    </View>
  );
}