const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

// let algo;

// const getRepos = (url) => {
//   return fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//       algo = data.map((repo) => repo.name)
//     });
// }

// describe('Testes de existência de repositórios', () => {
//   const url = 'https://api.github.com/users/tryber/repos';
//   const repo1 = 'sd-01-week4-5-project-todo-list';
//   const repo2 = 'sd-01-week4-5-project-meme-generator';

//   test('Testa se 4-5 todo list existe', async () => {
//     await getRepos(url);
//     await expect(algo.includes(repo1)).toBe(false);
//   });

//   test('Testa se 4-5 meme generator existe', async () => {
//     await getRepos(url);
//     await expect(algo.includes(repo2)).toBe(false);
//   });
// });

it('gets a list of repositories names', () => {
  const url = 'https://api.github.com/users/tryber/repos';
  return getRepos(url).then(result => {
    expect(result).not.toContain('sd-01-week4-5-project-todo-list');
    expect(result).not.toContain('sd-01-week4-5-project-meme-generator');
  });
});