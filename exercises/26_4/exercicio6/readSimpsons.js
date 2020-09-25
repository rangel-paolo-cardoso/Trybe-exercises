// const express = require('express');
const fs = require('fs');
const path = require('path');
// const router = express.Router();

async function getSimpsons () {
  return await fs.readFile(path.resolve(__dirname, '.', 'simpsons.json'), (err, data) => {
    if (err) return err;
    // content = data.toString();
    // console.log(data.toString('utf8'));
    return data.toString('utf8');
  });
  // await console.log(content);
  // return JSON.parse(content.toString('utf8'));
}

getSimpsons().then((resp) => console.log(resp));

// router.get('/', async (request, response) => {
//   console.log(getSimpsons());
//   // const result = await getSimpsons();
//   // return response.status(200).send(result);
// });

// module.exports = getSimpsons;
