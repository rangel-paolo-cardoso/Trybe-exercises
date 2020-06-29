import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NavBar from '../NavBar';

afterEach(cleanup);

describe('Teste do NavBar', () => {
  const { getByText } = renderWithRouter(<NavBar />);
  test('Verifica se os links de navegação estão na tela.', () => {
    expect(getByText('Minhas informações')).toBeDefined();
    expect(getByText('Principais habilidades')).toBeDefined();
    expect(getByText('Portifólio - uma pequena amostra')).toBeDefined();
  });

  test('Verifica se a rota Habilidades aparece na tela.', () => {
    const { getByText, history } = renderWithRouter(<NavBar />);
    fireEvent.click(getByText('Principais habilidades'));
    expect(history.location.pathname).toBe('/habilities');
  });

  test('Verifica se a rota Portfolio aparece na tela.', () => {
    const { getByText, history } = renderWithRouter(<NavBar />);
    fireEvent.click(getByText('Portifólio - uma pequena amostra'));
    expect(history.location.pathname).toBe('/portfolio');
  });
});