import { screen, fireEvent } from '@testing-library/react';
import { TableContainer } from '../TableContainer';
import { renderWithProviders } from 'src/renerWithProviders';
import { mockSelectedUser } from '../../SelectedUser/mockUserData';

describe('TableContainer test', () => {
  beforeEach(() => renderWithProviders(<TableContainer />, {
    preloadedState: {
      users: {
        items: [mockSelectedUser],
        total_count: 1,
        error: null,
      }
    }
  }));

  test('Проверяем отображение появление записей в таблице', () => {
    expect(screen.getByText('testUserLogin')).toBeInTheDocument();
    expect(screen.getByText('testUsernodeId')).toBeInTheDocument();
    expect(screen.getByText('testUsertype')).toBeInTheDocument();
  });

});