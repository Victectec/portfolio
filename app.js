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

app.get('/cnt', (req, res) => {
    res.sendFile(path.join(__dirname,"public", 'cnt/cnt.html'));
});
app.get('/chs', (req, res) => {
    res.sendFile(path.join(__dirname,"public", 'chs/chs.html'));
});

app.get('/iot', (req, res) => {
    res.sendFile(path.join(__dirname,"public", 'iot/iot.html'));
});

app.get('/matematica', (req, res) => {
    res.sendFile(path.join(__dirname,"public", 'matematica/matematica.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"public", 'header.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
