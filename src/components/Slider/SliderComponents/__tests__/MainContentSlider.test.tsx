import { fireEvent, screen, waitFor } from '@testing-library/react';
import { MainContentSlider } from '../MainContentSlider';
import { renderWithProviders } from 'src/renerWithProviders';

describe('MainContentSlider test', () => {
  beforeEach(() => renderWithProviders(<MainContentSlider />));

  test('Проверяем работу инпута логин', () => {
    const loginInput = screen.queryByTestId('login');
    expect(screen.getByText('Логин')).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
    expect(screen.queryByDisplayValue(/to be or not to be/i)).not.toBeInTheDocument();
    if (loginInput) {
      fireEvent.change(loginInput, {
        target: { value: 'To be or not to be' },
      });
      expect(screen.getByDisplayValue(/to be or not to be/i)).toBeInTheDocument();
    }
  });

  test('Проверяем работу селекта типа пользователей', async () => {
    const typeSelect = screen.queryAllByRole('combobox')[0];
    expect(screen.getByText('Описание')).toBeInTheDocument();
    expect(typeSelect).toBeInTheDocument();
    expect(screen.queryByText(/Организации/i)).not.toBeInTheDocument();
    if (typeSelect) {
      fireEvent.change(typeSelect, {
        target: { value: 'org' },
      });
      await waitFor(() => expect(screen.getByText('Организации')).toBeVisible());
      expect(screen.getByText('Организации')).toBeInTheDocument();
    }
  });

});