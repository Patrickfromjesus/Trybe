import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import { act } from 'react-dom/test-utils';

describe('test in react router', () => {

  test('1. access react router', () => {
    const { history } = renderWithRouter(<App />);
    const linkElement = screen.getByText(/Você está na página início/i);
    expect(linkElement).toBeInTheDocument();
    const link = screen.getByText(/Sobre/i);
    userEvent.click(link);
    expect(history.location.pathname).toBe('/about');
    const linkText = screen.getByText('Você está na página Sobre');
    expect(linkText).toBeInTheDocument();
  });

  test('2. access react router and push to not find', () => {
    const { history } = renderWithRouter(<App />);

    act(() => history.push('/anythings'));

    const notFoundTitle = screen.getByRole('heading', {name: 'Página não encontrada'});
    expect(notFoundTitle).toBeInTheDocument();
  })

  test('3. components individually', () => {
      renderWithRouter(<About />);
    
      const aboutTitle = screen.getByRole('heading',
        { name: 'Você está na página Sobre' });
      expect(aboutTitle).toBeInTheDocument();
  })
})
