import { screen, fireEvent } from '@testing-library/react';
import { ExpandSliderButton } from '../ExpandSliderButton';
import { renderWithProviders } from 'src/renerWithProviders';

describe('ExpandSliderButton test', () => {
  beforeEach(() => renderWithProviders(<ExpandSliderButton />, {
    preloadedState: {
      slider: {
        isVisibleSlider: false,
        fields: {},
      },
    }
  }));

  test('Проверяем работу бургерной нопки', () => {
    const burgerButton = screen.queryByRole('button');
    expect(burgerButton).toBeInTheDocument();
    if (burgerButton) {
      fireEvent.click(burgerButton);
      expect(burgerButton).not.toBeInTheDocument();
    }
  });

});
