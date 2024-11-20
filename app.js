const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const upload = multer();
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('', (req, res) => {
    res.sendFile(path.join(__dirname,"public", 'index.html'));
});

app.get('/curriculo', (req, res) => {
    res.sendFile(path.join(__dirname,"public", 'curriculo/curriculo.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
