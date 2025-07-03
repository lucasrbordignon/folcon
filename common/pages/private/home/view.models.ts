import { DateFilterType, StatusFilterType } from '@/components/filters/FilterCollapse';
import mockData from '@/data/mockData.json';
import { contactHomeType } from '@/types/contactHomeTypes';
import { useEffect, useMemo, useState } from 'react';
import { filterByDate, filterByStatus, HomeViewModelData, sortNewest } from './models';

export function useHomeViewModel(): HomeViewModelData {
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

  return {
    items: filteredAndSortedItems,
    selectedFilter,
    setSelectedFilter,
    selectedDateFilter,
    setSelectedDateFilter,
  };
}