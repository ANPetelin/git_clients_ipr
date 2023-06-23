import { screen } from '@testing-library/react';
import { App } from './App';
import { renderWithProviders } from 'src/renerWithProviders';

// describe('App test', () => {
//   beforeEach(() => renderWithProviders(<App />));

  // Разблокировать в случае пожелания вывода в консоль
  // test('Отрисовываем весь html', () => {
  //   screen.debug();
  // });

  // test('Делаем снепшот', () => {
  //   const { asFragment } = renderWithProviders(<App />);
  //   expect(asFragment()).toMatchSnapshot();
  // });
// });

describe('App spinner test', () => {

  test('Проверяем работу асинхроной работы', async () => {
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    renderWithProviders(<App />);
    expect(screen.queryByTestId('spinner')).toBeInTheDocument();
  });

});
