import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // testing App.js component
  //Learn React, leaRn react, learn REACT.
  const linkElement = screen.getByText(/learn react/i);// it is selecting element whose text is learn react and i is for ignoring case sensitvity
  expect(linkElement).toBeInTheDocument(); // jest doing checking if element exist
});

test('check for four list item',()=>{
  render(<App/>);
  const listItems = screen.getAllByRole('listitem'); // This will get all list items
  expect(listItems).toHaveLength(4);
})

test('check for hello heading',()=>{
  render(<App/>)
  // const headingElem = screen.getByText('Hello');
  // expect(headingElem).toBeInTheDocument();
  const headingElem = screen.getByTestId('test_id_1');
  expect(headingElem).toBeInTheDocument();
})