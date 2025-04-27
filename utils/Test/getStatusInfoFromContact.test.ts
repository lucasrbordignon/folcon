import { selectColorFromStatus, selectTitleFromStatus } from '../getStatusInfoFromContact';

describe('getStatusInfoFromContact utility functions', () => {
  describe('selectColorFromStatus', () => {
    it('should return the correct color for a given status', () => {
      expect(selectColorFromStatus('finalizado')).toBe('#00D492');
      expect(selectColorFromStatus('aberto')).toBe('#FFD230');
      expect(selectColorFromStatus('cancelado')).toBe('#C60036');
    });

    it('should return undefined for an unknown status', () => {
      expect(selectColorFromStatus('inexistente')).toBeUndefined();
    });
  });

  describe('selectTitleFromStatus', () => {
    it('should return the correct title for a given status', () => {
      expect(selectTitleFromStatus('finalizado')).toBe('Finalizados');
      expect(selectTitleFromStatus('aberto')).toBe('Abertos');
      expect(selectTitleFromStatus('cancelado')).toBe('Cancelados');
      expect(selectTitleFromStatus('todos')).toBe('Todos');
    });

    it('should return undefined for an unknown status', () => {
      expect(selectTitleFromStatus('inexistente')).toBeUndefined();
    });
  });
});