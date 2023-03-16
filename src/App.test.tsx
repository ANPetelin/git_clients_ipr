import { screen } from '@testing-library/react';
import { App } from './App';
import { renderWithProviders } from './renerWithProviders';

describe('App', () => {
  beforeEach(() => renderWithProviders(<App />));

  it('Первый тест', () => {
    expect(screen.getByRole('button')).toHaveTextContent('TEST_FETCH');
  });

  test('Второй тест', () => {
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  })
});
