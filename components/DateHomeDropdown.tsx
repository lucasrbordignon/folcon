import { selectTitleFromDateFilter } from '@/utils/getDateFilterInfoFromContact';
import { Calendar } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Menu } from 'react-native-paper';

type dateFilterType = 'hoje' | 'ontem' | 'ultimos7dias' | 'ultimos30dias' | 'todos'; 
interface DateDropdownProps {
  selected: dateFilterType;
  onChange: (value: dateFilterType) => void;
}

const DateDropdown: React.FC<DateDropdownProps> = ({ selected, onChange }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelect = (value: dateFilterType) => {
    onChange(value);
    closeMenu();
  };

  return (
    <View className='flex flex-row pl-4 my-2'>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable onPress={openMenu} className='bg-teal-600 border border-teal-400 rounded-full flex flex-row py-2 px-4 gap-2'>
            <Calendar color={'#FFFF'} size={18} />
            <Text className='!text-white'>
              {selectTitleFromDateFilter(selected)}
            </Text>
          </Pressable>
        }
      >
        <Menu.Item onPress={() => handleSelect('hoje')} title="Hoje" />
        <Menu.Item onPress={() => handleSelect('ontem')} title="Ontem" />
        <Menu.Item onPress={() => handleSelect('ultimos7dias')} title="Últimos 7 dias" />
        <Menu.Item onPress={() => handleSelect('ultimos30dias')} title="Últimos 30 dias" />
        <Menu.Item onPress={() => handleSelect('todos')} title="Todos" />
      </Menu>
    </View>
  );
};

const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export default DateDropdown;
