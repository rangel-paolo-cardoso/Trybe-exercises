const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, `${file.originalname}${Date.now()}`);
  },
});

const upload = multer({ storage });

app.post('/files/upload', upload.single('file'), (req, res) => {
  console.log('File: ', req.file);
  console.log('Body: ', req.body);
  res.send().status(200);
});

app.post('files/write', async (req, res) => {
  const { content } = req.body;
  await fs.writeFile(`./uploads/${Date.now()}.txt`, content, { flag: 'wx' });
  res.send().status(200);
});

app.listen(3000, () => console.log('Aplicação rodando!'));
