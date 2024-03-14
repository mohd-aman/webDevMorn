import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('check input for username is present',()=>{
    render(<Login/>);
    const usernameInput = screen.getByPlaceholderText('username');
    expect(usernameInput).toBeInTheDocument();
})

test('check input for password is present',()=>{
    render(<Login/>);
    const passwordInput = screen.getByPlaceholderText('password');
    expect(passwordInput).toBeInTheDocument();
})

test('check for button is present',()=>{
    render(<Login/>);
    const buttonElem = screen.getByRole('button');
    expect(buttonElem).toBeInTheDocument();
})

test('check if username input is empty at start',()=>{
    render(<Login/>);
    const usernameInput = screen.getByPlaceholderText('username');
    expect(usernameInput).toHaveValue("");
})

test('check if password input is empty at start',()=>{
    render(<Login/>);
    const passwordInput = screen.getByPlaceholderText('password');
    expect(passwordInput.value).toBe('');
})

test('check for correct data recieved for userName',()=>{
    render(<Login/>);
    const usernameInput = screen.getByPlaceholderText('username');
    fireEvent.change(usernameInput, { target: { value: 'Hello, World!' } });
    expect(usernameInput).toHaveValue('Hello, World!');
})