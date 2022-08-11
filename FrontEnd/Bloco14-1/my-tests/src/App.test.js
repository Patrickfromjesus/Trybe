import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ValidationForm from './Components/ValidationForm';

describe('1. test if email input works and show on the screen.', () => {

  it('test if input is type email and visible', () => {
    render(<App />);
    const inputEmail = screen.getByTestId('input-email') ;
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  it('test if input is type button and visible', () => {
    render(<App />);
    const inputBtn = screen.getByTestId('input-btn') ;
    expect(inputBtn).toBeInTheDocument();
    expect(inputBtn.type).toBe('button');
  });
  it('test if emails field appear on the screen', () => {
    render(<App />);
    const emailShow = screen.getByTestId('email-show');
    expect(emailShow).toBeInTheDocument();
  });
  it('test if email is on the screen', () => {
    render(<App />);
    const emailShow = screen.getByTestId('email-show');
    const inputBtn = screen.getByTestId('input-btn') ;
    const inputEmail = screen.getByTestId('input-email') ;
    userEvent.type(inputEmail, 'trybe@test.com');
    userEvent.click(inputBtn);
    expect(inputEmail.value).toBe('');
    expect(emailShow).toHaveTextContent('trybe@test.com');
  });
  it('test if email is valid', () => {
    render(<ValidationForm email={ 'trybe@test.com' } />);
    const text = screen.getByText('Email válido');
    expect(text).toBeInTheDocument();
  })
  it('test if email is not valid', () => {
    render(<ValidationForm email={ 'trybetestcom' } />);
    const text = screen.getByText('Email inválido!');
    expect(text).toBeInTheDocument();
  })
  
});
