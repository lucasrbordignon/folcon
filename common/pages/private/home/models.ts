import { DateFilterType, StatusFilterType } from '@/components/filters/FilterCollapse';
import { contactHomeType } from '@/types/contactHomeTypes';
import { isToday, isYesterday, subDays } from 'date-fns';

export function filterByDate(items: contactHomeType[], filter: DateFilterType): contactHomeType[] {
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

export function filterByStatus(items: contactHomeType[], status: StatusFilterType): contactHomeType[] {
  if (status === 'todos') return items;
  return items.filter(item => item.status === status);
}

export function sortNewest(items: contactHomeType[]): contactHomeType[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.contactedAt).getTime();
    const dateB = new Date(b.contactedAt).getTime();
    return dateB - dateA;
  });
}

export interface HomeViewModelData {
  items: contactHomeType[];
  selectedFilter: StatusFilterType;
  setSelectedFilter: (status: StatusFilterType) => void;
  selectedDateFilter: DateFilterType;
  setSelectedDateFilter: (date: DateFilterType) => void;
}