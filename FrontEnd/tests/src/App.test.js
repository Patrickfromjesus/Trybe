import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState, //o initialState também poderia ser declarado no createStore, porém não faz sentido, já que cada reducer tem o seu.
    store = createStore(combineReducers({ clickReducer }), initialState), 
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

  describe('Testes em Redux', () => {
    beforeEach(cleanup);
    it('1. teste se os componentes estão na tela', () => {
      renderWithRedux(<App />);

      const getBtn = screen.queryByText('Clique aqui');
      const getCounter = screen.getByText('0');

      expect(getBtn).toBeInTheDocument();
      expect(getCounter).toBeInTheDocument();
    })

    it('2. teste com alteração no initialState', () => {
      renderWithRedux(<App />, { initialState: { clickReducer: { counter: 4 } } });

      const getBtn = screen.getByText('4');

      expect(getBtn).toBeInTheDocument();
    });

    it('3. teste se mudando o estado e clicando, funciona como deveria', () => {
      renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
      
      const getClick = screen.getByRole('button', { name: /clique/i });
      const getCounter = screen.getByText('10');

      expect(getClick).toBeInTheDocument();
      expect(getCounter).toBeInTheDocument();
      
      userEvent.click(getClick);

      expect(getCounter.innerHTML).toBe('11');

    })

  })