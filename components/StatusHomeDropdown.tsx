import { selectTitleFromStatus } from '@/utils/getStatusInfoFromContact';
import { Funnel } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Menu, Text } from 'react-native-paper';

type statusFilterType = 'aberto' | 'finalizado' | 'cancelado' | 'todos';

interface StatusDropdownProps {
  selected: statusFilterType;
  onChange: (value: statusFilterType) => void;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({ selected, onChange }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelect = (value: statusFilterType) => {
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
            <Funnel color={'#FFFF'} size={18} />
            <Text className='!text-white'>
              {selectTitleFromStatus(selected)}
            </Text>
          </Pressable>
        }
      >
        <Menu.Item onPress={() => handleSelect('aberto')} title="Abertos" />
        <Menu.Item onPress={() => handleSelect('finalizado')} title="Finalizados" />
        <Menu.Item onPress={() => handleSelect('cancelado')} title="Cancelados" />
        <Menu.Item onPress={() => handleSelect('todos')} title="Todos" />
      </Menu>
    </View>
  );
};

const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export default StatusDropdown;
