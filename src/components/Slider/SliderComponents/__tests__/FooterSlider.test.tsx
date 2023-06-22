import { screen } from '@testing-library/react';
import { FooterSlider } from '../FooterSlider';
import { renderWithProviders } from 'src/renerWithProviders';

describe('FooterSlider test', () => {
  beforeEach(() => renderWithProviders(<FooterSlider />));

  test('Наличие кнопки применить', () => {
    expect(screen.queryByText('Применить')).toBeInTheDocument();
  });
});
