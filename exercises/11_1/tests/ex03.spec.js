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
  test('Verifica se usuário existe, dado um ID', async () => {
    try {
      const user = await getUserName(5);
      expect(user).toBe('Paul');
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + 6 + ' not found.' });
    }
  });

  test('Dado um ID inválido, verifica se da erro', async () => {
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + 6 + ' not found.' });
    }
  });
});
