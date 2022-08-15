import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testes da API de piadas', () => {
  it('should be possible to see the Joke title on the screen', () => {
    render(<App />);
    const title = screen.queryByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Joke');
  })
  it('should be possible to see a random joke on the screen', async () => {
    const jokeApi = 'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.';
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        joke: jokeApi,
      })
    })
    render(<App />);
    const joke = await screen.findByText(jokeApi);
    expect(joke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  })
})