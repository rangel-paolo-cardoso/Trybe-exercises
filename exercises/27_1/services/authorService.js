const nodemailer = require('nodemailer');
const Author = require('../models/Author');

const create = async (firstName, middleName, lastName) => {
  const author = await Author.create(firstName, middleName, lastName);

  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '3c64b2d4993641',
      pass: '60a12e603e46b9',
    },
  });

  const mailOptions = {
    from: 'mario@mushroomkingdom',
    to: 'bowser@mushroomkingdom.com',
    subject: 'It\'s a-me, Mario!',
    text: `Olá, ${author.name}! Boas vindas à nossa plataforma.`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('Não foi possível enviar email: ', err);
        return reject(err);
      }

      console.log('Email enviado com sucesso: ', info);
      resolve(author);
    });
  });
};

module.exports = {
  create,
};
