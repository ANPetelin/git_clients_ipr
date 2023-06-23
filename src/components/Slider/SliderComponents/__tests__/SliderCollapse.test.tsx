import { screen, fireEvent } from '@testing-library/react';
import { SliderWrapper } from '../../index';
import { renderWithProviders } from 'src/renerWithProviders';

describe('SliderCollapse test', () => {
  beforeEach(() => renderWithProviders(<SliderWrapper />));

  test('Проверяем работу открытие/сворачивания слайдер меню', () => {
    const collapseButton = screen.queryByTestId('collapse-button');
    expect(screen.getByText(/фильтры/i)).toBeInTheDocument();
    expect(screen.queryByTestId('expand-slider-button')).not.toBeInTheDocument();
    if (collapseButton) {
      fireEvent.click(collapseButton);
      expect(collapseButton).not.toBeInTheDocument();
      expect(screen.getByText(/фильтры/i)).not.toBeInTheDocument();
      const expandSliderButton = screen.queryByTestId('expand-slider-button');
      expect(expandSliderButton).toBeInTheDocument();
      if (expandSliderButton) {
        fireEvent.click(expandSliderButton);
        expect(screen.getByText(/фильтры/i)).toBeInTheDocument();
        expect(screen.queryByTestId('expand-slider-button')).not.toBeInTheDocument();
      }
    }
  });

});