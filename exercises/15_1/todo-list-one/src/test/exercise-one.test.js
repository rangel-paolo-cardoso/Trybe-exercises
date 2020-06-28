import React from 'react';
import { render, fireEvent, cleanup, getByText } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByRole } = render(<App />);
    const btn = getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn.value).toBe('Adicionar');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const { getByLabelText, queryByText } = render(<App />);
    const myText = 'Lavar louça';

    const inputTxt = getByLabelText('Tarefa:');
    const btn = queryByText('Adicionar');
    fireEvent.change(inputTxt, { target: { value: myText } });
    expect(queryByText(myText)).not.toBeInTheDocument();
    fireEvent.click(btn);
    expect(queryByText(myText)).toBeInTheDocument();
  });
});
