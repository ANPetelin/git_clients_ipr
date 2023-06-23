import { screen, fireEvent } from '@testing-library/react';
import { PaginationContainer } from '../PaginationContainer';
import { renderWithProviders } from 'src/renerWithProviders';

describe('PaginationContainer test', () => {
  beforeEach(() => renderWithProviders(<PaginationContainer />, {
    preloadedState: {
      users: {
        items: [],
        total_count: 777,
        error: null,
      }
    }
  }));

  test('Проверяем отображение количества записей в пагинации', () => {
    expect(screen.getByText('Всего записей 777')).toBeInTheDocument();
  });

  test('Проверяем переключение страниц пагинации', () => {
    const lastPageButton = screen.getByText('78');
    expect(lastPageButton).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    if (lastPageButton) {
      fireEvent.click(lastPageButton);
      expect(screen.queryByText('2')).not.toBeInTheDocument();
    }
  });

});