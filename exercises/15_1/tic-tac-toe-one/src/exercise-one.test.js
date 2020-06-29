import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  test('Verificar se foi renderizada nove casas', () => {
    const { queryAllByTestId } = render(<TicTacToe />);
    const casas = queryAllByTestId(/cell_/);
    expect(casas.length).toBe(9);
  });

  test('Começar com todos os espaços em branco.', () => {
    const { queryAllByTestId } = render(<TicTacToe />);
    const blankSpace = queryAllByTestId(/cell_/);
    blankSpace.forEach((item) => {
      expect(item.textContent).toBe('');
    });
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const { queryByText } = render(<TicTacToe />);
    expect(queryByText('Fim de Jogo')).toBeNull();
  });
});
