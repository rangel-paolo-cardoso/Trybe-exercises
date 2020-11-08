const express = require('express');

const app = express();
const message = process.env.MESSAGE || 3000;
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(message));

app.listen(port);
console.log(`Example app listening on port port!`);

// Esse arquivo é para guardar dicas de deploy com Heroku

/**
 * --- Listar os remotes
 * git remote -v
 * 
 * --- Renomear um remote
 * git remote renome nome-do-remote novo-nome
 * 
 * --- Remover um remote
 * git remote rm nome-do-remote
 * 
 * --- Logar no heroku
 * heroku login
 * 
 * --- Para criar um projeto sem nome no heroku
 * heroku create
 * 
 * --- Para criar um projeto com nome no heroku
 * heroku create nome-do-projeto
 * 
 * --- Criar projeto React com buildpack sem nome
 * heroku create --buildpack mars/create-react-app
 * 
 * --- Criar projeto React com buildpack e com nome
 * heroku create nome-do-projeto --buildpack mars/create-react-app
 * 
 * --- Adicionando um remote e criando um projeto Heroku
 * heroku create --remote nome-do-remote nome-do-projeto
 * 
 * --- Ver logs
 * heroku logs --app=nome-do-projeto --tail
 * ou
 * heroku logs --app=nome-do-projeto
 * 
 * --- Ver últimos N logs
 * heroku logs -n 5 --app nome-do-projeto
 * 
 * --- Ajuda
 * heroku --help
 * 
 * --- Ajuda específica
 * heroku nome-do-comando --help
 * 
 * --- Fazer deploy
 * git push nome-do-remote master
 * 
 * --- Ver todas as aplicações
 * heroku apps
 * 
 * --- Ver detalhes de um app específico
 * heroku apps:info nome-do-projeto
 * 
 * --- Excluír um app
 * heroku apps:delete nome-do-projeto
 * 
 * --- Declarar variáveis de ambiente
 * heroku config:set VAR=Valor --app nome-do-projeto
 * 
 * --- Declarar várias variáveis de ambiente
 * heroku config:set VAR1=Valor1 VAR2=valor2 --app nome-do-projeto
 * 
 * --- Remover variáveis de ambiente
 * heroku config:unset NOME_DA_VARIAVEL
 * 
 * --- Exibir variáveis de ambiente
 * heroku config
 * 
*/