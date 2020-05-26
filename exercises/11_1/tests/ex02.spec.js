const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) return resolve(users[id]);
      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = userID => findUserById(userID).then(user => user.name);

describe('Testes para selecionar usuários de um BD', () => {
  test('Verifica se usuário existe, dado um ID', () => {
    return getUserName(5).then(user => {
      expect(user).toBe('Paul');
    });
  });

  test('Dado um ID incorreto, verifica se retorna um erro.', () => {
    return getUserName(6).catch(erro => {
      expect(erro).toEqual({ error: 'User with ' + 6 + ' not found.' });
    });
  });
});
