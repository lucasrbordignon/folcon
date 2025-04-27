import { selectTitleFromDateFilter } from '../getDateFilterInfoFromContact';

describe('getDateFilterInfoFromContact utility function', () => {
  it('should return the correct title for a given date filter', () => {
    expect(selectTitleFromDateFilter('hoje')).toBe('Hoje');
    expect(selectTitleFromDateFilter('ontem')).toBe('Ontem');
    expect(selectTitleFromDateFilter('ultimos7dias')).toBe('Últimos 7 dias');
    expect(selectTitleFromDateFilter('ultimos30dias')).toBe('Últimos 30 dias');
    expect(selectTitleFromDateFilter('todos')).toBe('Todos');
  });

  it('should return undefined for an unknown date filter', () => {
    expect(selectTitleFromDateFilter('inexistente')).toBeUndefined();
    expect(selectTitleFromDateFilter('')).toBeUndefined();
    expect(selectTitleFromDateFilter(undefined as unknown as string)).toBeUndefined();
  });
});