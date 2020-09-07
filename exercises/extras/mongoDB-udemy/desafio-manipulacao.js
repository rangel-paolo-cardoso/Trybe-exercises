use zoologico;

db.createCollection('animais');

show dbs;

show collections;

db.animais.insertMany([
  {
    nome: "Periquito",
    especie: "ave",
    paisOrigem: "Brasil"
  },
  {
    nome: "Urso",
    especie: "mamifero",
    paisOrigem: "Russia"
  },
  {
    nome: "Leão",
    especie: "felino",
    paisOrigem: "África do Sul"
  }
]);

db.animais.insertMany([
  {
    nome: "Panda",
    especie: "mamifero",
    paisOrigem: "Japão"
  },
  {
    nome: "Tiranossauro",
    especie: "carnívoro",
    paisOrigem: "Estados Unidos"
  },
  {
    nome: "Elefante",
    especie: "mamifero",
    paisOrigem: "África do Sul"
  }
]);

db.animais.find();

db.animais.count();

db.animais.find().sort({especie: 1});

db.animais.find().sort({nome: 1}).limit(2);
