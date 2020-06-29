import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste do componente App.', () => {
  afterEach(cleanup);
  const { getByTestId } = renderWithRouter(<App />);
  test('Verifica se índice está na tela.', () => {
    expect(getByTestId('main-title')).toBeDefined();
  });
});
