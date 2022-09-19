import { screen, waitFor } from '@testing-library/react';
import renderWithRedux from './Services/test';
import fetchMock from 'fetch-mock-jest';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('testes do redux', () => {
  test('se o botão está na tela', () => {
    renderWithRedux(<App />);

    const getBtn = screen.getByRole('button', { name: /novo/i });

    expect(getBtn).toBeInTheDocument();
  });

  test('se, ao clicar no botão, a imagem aparece', async () => {
    renderWithRedux(<App />);

    const getBtn = screen.getByRole('button', { name: /novo/i });
    const url = 'https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg';

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: url },
    });

    userEvent.click(getBtn);

    await waitFor(() => expect(screen.getByRole('img', { name: 'dog' }).src).toBe(url));
    expect(fetchMock.called()).toBeTruthy();

  });

})
