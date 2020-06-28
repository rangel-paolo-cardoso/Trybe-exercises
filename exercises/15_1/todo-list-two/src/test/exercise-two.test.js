import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByText, getByLabelText, getByRole } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const inputText = getByLabelText('Tarefa:');
    const btn = getByRole('button');
    // Verificando existência.
    expect(inputText).toBeDefined();
    expect(btn).toBeDefined();
    // Existindo, prossiga.
    listTodo.forEach((item) => {
      fireEvent.change(inputText, { target: { value: item } });
      fireEvent.click(btn);
    });
    // verifica se existem.
    listTodo.forEach((item) => {
      expect(getByText(item)).toBeDefined();
    });
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const propriedade = 'Lavar louça';
    const { getByText } = render(<Item content={propriedade} />);
    expect(getByText(propriedade)).toBeDefined();
  })
})
