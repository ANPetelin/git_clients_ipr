import { screen, waitFor } from '@testing-library/react';
import { CardUserContent } from '../CardUserContent';
import { renderWithProviders } from 'src/renerWithProviders';
import { mockSelectedUser } from '../mockUserData';

describe('CardUserContent test', () => {
  beforeEach(() => renderWithProviders(<CardUserContent selectedUser={mockSelectedUser} />, {
    preloadedState: {
      selectedUser: {
        selectedUser: mockSelectedUser,
      }
    }
  }));

  test('Проверяем асинхронную работу карточки юсера', async () => {
    await waitFor(() => expect(screen.getByText(/Откуда: Russia/i)).toBeVisible());
    screen.debug();
  });

});