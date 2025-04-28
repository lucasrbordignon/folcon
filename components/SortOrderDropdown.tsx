import { ArrowUpDown } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Menu, Text } from 'react-native-paper';

type sortOrderType = 'newest' | 'oldest';

interface SortOrderDropdownProps {
  selected: sortOrderType;
  onChange: (value: sortOrderType) => void;
}

const SortOrderDropdown: React.FC<SortOrderDropdownProps> = ({ selected, onChange }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelect = (value: sortOrderType) => {
    onChange(value);
    closeMenu();
  };

  const getTitle = (value: sortOrderType): string => {
    return value === 'newest' ? 'Mais novos' : 'Mais antigos';
  };

  return (
    <View className="flex flex-row my-2">
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable
            onPress={openMenu}
            className="bg-teal-600 border border-teal-400 rounded-full flex flex-row py-2 px-4 gap-2 items-center"
          >
            <ArrowUpDown color={'#FFFF'} size={18} />
            <Text className="!text-white">{getTitle(selected)}</Text>
          </Pressable>
        }
      >
        <Menu.Item
          onPress={() => handleSelect('newest')}
          title="Mais novos"          
        />
        <Menu.Item
          onPress={() => handleSelect('oldest')}
          title="Mais antigos"
        />
      </Menu>
    </View>
  );
};

export default SortOrderDropdown;