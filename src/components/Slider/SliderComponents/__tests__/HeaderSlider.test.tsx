import { screen } from '@testing-library/react';
import { HeaderSlider } from '../HeaderSlider';
import { renderWithProviders } from 'src/renerWithProviders';

describe('HeaderSlider test', () => {
  beforeEach(() => renderWithProviders(<HeaderSlider />));

  test('Проверяем наличие названия хедера', () => {
    expect(screen.getByText(/фильтры/i)).toBeInTheDocument();
  });

  test('Проверяем наличие кнопки скрывающей слайдер', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

});