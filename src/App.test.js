import React from 'react'
import { findByText, render } from '@testing-library/react';
import App from './App';

test('renders whithout crushing', async () => {
  const {findByText} = render(<App />);
  const title = await findByText(/Ultima busqueda/i);
  expect(title).toBeInTheDocument();
});
