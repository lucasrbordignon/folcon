import DateDropdown from "@/components/ui/DateHomeDropdown";
import StatusDropdown from "@/components/ui/StatusHomeDropdown";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export type StatusFilterType = 'aberto' | 'finalizado' | 'cancelado' | 'todos';
export type DateFilterType = 'hoje' | 'ontem' | 'ultimos7dias' | 'ultimos30dias' | 'todos';

interface FilterCollapseProps {
  selectedStatus: StatusFilterType;
  onStatusChange: (status: StatusFilterType) => void;
  selectedDate: DateFilterType;
  onDateChange: (date: DateFilterType) => void;
  description: string;
}

export default function FilterCollapse({
  selectedStatus,
  onStatusChange,
  selectedDate,
  onDateChange,
  description,
}: FilterCollapseProps) {
  const [open, setOpen] = useState(false);

  return (
    <View className="mt-1">
      <TouchableOpacity
        className="flex-row items-center justify-between rounded-full px-4 py-4"
        onPress={() => setOpen(!open)}
        activeOpacity={0.8}
      >
        <Text className={`text-zinc-500 font-semibold${open ? ' opacity-0' : ''}`}>{description}</Text>
        {open ? (
          <Ionicons key="close" name="close" size={28} color="#0d9488" />
        ) : (
          <Ionicons key="filter" name="filter" size={28} color="#0d9488" />
        )}
      </TouchableOpacity>
      {open && (
        <View className="flex-row justify-start absolute left-0 right-0">
          <StatusDropdown selected={selectedStatus} onChange={onStatusChange} />
          <DateDropdown selected={selectedDate} onChange={onDateChange} />
        </View>
      )}
    </View>
  );
}