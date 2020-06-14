import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('allows the user to enter todo item', () => {
  render(<App />)
  window.localStorage.clear()

  fireEvent.change(screen.getByPlaceholderText(/Enter your todo here/i), {
    target: {value: 'Hello'},
  })
  
  fireEvent.click(screen.getByText(/Add/i))

  const listItemAdd = screen.getByText(/Total todos remaining: 1 out of 1./i);
  const listItemInList = screen.getByText(/Hello/i);
  expect(listItemInList).toBeInTheDocument();
  expect(listItemAdd).toBeInTheDocument();
  expect(JSON.parse(JSON.parse(JSON.stringify(window.localStorage.getItem('data'))))!.length).toEqual(1)
})

test('check on click list item is completed', () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Hello/i))
  let listdata = JSON.parse(JSON.parse(JSON.stringify(window.localStorage.getItem('data'))));
  const linkElement = screen.getByText(/Total todos remaining: 0 out of 1./i);
  expect(listdata[0].isCompleted).toEqual(true);
  expect(linkElement).toBeInTheDocument();
});

test('check on click again the list item is uncompleted', () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Hello/i))
  
  let listdataAfter = JSON.parse(JSON.parse(JSON.stringify(window.localStorage.getItem('data'))));
  const listElementAfter = screen.getByText(/Total todos remaining: 1 out of 1./i);
  expect(listdataAfter[0].isCompleted).toEqual(false)
  expect(listElementAfter).toBeInTheDocument();
})
