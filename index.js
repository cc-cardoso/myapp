const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 4000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myapp'
});

connection.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao MySQL');
    } else {
        console.log('Conectado ao MySQL!');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});