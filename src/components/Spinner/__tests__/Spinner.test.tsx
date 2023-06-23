import { screen } from '@testing-library/react';
import { Spinner } from '../../Spinner';
import { renderWithProviders } from 'src/renerWithProviders';

describe('Spinner test', () => {
    beforeEach(() => renderWithProviders(<Spinner />, {
      preloadedState: {
        loader: {
            loading: true,
        }
      }
    }));

  test('Проверяем наличие лоадера', () => {
    expect(screen.queryByTestId('spinner')).toBeInTheDocument();
  });

});