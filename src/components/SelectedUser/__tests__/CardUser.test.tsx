import { screen, fireEvent, waitFor } from '@testing-library/react';
import { CardUser } from '../CardUser';
import { renderWithProviders } from 'src/renerWithProviders';
import { mockSelectedUser } from '../mockUserData';

describe('CardUser test', () => {
  beforeEach(() => renderWithProviders(<CardUser />, {
    preloadedState: {
      selectedUser: {
        selectedUser: mockSelectedUser,
      }
    }
  }));

  test('Проверяем карточку юсера', async () => {
    await waitFor(() => expect(screen.getByText(/данные юсера/i)).toBeVisible());
    const okButton = screen.getByRole('button');
    expect(okButton).toBeInTheDocument();
    expect(screen.getByText(/количество репозиториев:/i)).toBeInTheDocument();
    if (okButton) {
      fireEvent.click(okButton);
      await waitFor(() => expect(screen.getByText(/данные юсера/i)).not.toBeVisible());
      expect(screen.queryByText(/количество репозиториев:/i)).not.toBeInTheDocument();
    }
  });

});