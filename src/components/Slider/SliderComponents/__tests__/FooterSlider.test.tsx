import { screen } from '@testing-library/react';
import { FooterSlider } from '../FooterSlider';
import { renderWithProviders } from 'src/renerWithProviders';

describe('FooterSlider test', () => {
  beforeEach(() => renderWithProviders(<FooterSlider />));

  test('Наличие кнопки применить', () => {
    expect(screen.getByText('Применить')).toBeInTheDocument();
  });
  test('Проверяем количество кнопок', () => {
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
