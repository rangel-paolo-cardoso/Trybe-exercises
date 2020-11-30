const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port port!`));

/**
 * https://sequelize.org/v4/manual/tutorial/querying.html#operators-aliases
 * 
 * --- Inicializar projeto npm
 * npm init ou npm init -y
 * 
 * -- É preciso isso para sequelizar!
 * --- Instalar o Sequelize
 * npm i sequelize (Deixe um banco de dados já criado.)
 * 
 * --- Instalar a CLI do Sequelize
 * npm i sequelize-cli -D ou npm i --save-dev sequelize-cli
 * 
 * --- Instalar o Mysql2
 * npm i mysql2
 * 
 * --- Inicializar um projeto com o Sequelize
 * npx sequelize-cli init
 * 
 * --- Não esqueça de configurar o arquivo config/config.json
 * --- Coloque uma chave para o objeto de development com o valor:
 * "operatorsAliases": false
 * 
 * --- Comando para criar um aquivo de migration
 * npx sequelize migration:generate --name nome-do-arquivo
 * 
 * --- Comando para criar o banco de dados que ta no arquivo de config/config.json
 * npx sequelize db:create
 * 
 * --- Migration pra criar uma tabela no banco (antes de executar o Seed)
 * npx sequelize db:migrate
 * 
 * --- Excluir banco de dados
 * npx sequelize db:drop
 * 
 * --- Migration pra desfazer suas alterações
 * npx sequelize db:migrate:undo
 * 
 * --- Criar um novo Seed
 * npx sequelize seed:generate --name nome-do-seed
 * 
 * --- Executar todos os Seeds (Seed serve para popular as tabelas, mas as tabelas precisam existir)
 * npx sequelize db:seed:all
 * 
 * --- Desfazer todos os Seeds (remove todas as inserções da tabela)
 * npx sequelize db:seed:undo:all
 * 
 * --- Comando para criar um Model
 * --  Obs: Ele cria o Model e sua Migration automaticamente.
 * npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
*/
