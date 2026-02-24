const express = require('express');
const path = require('path');

const app = express();

// Configurar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página de login
app.get('/login', (req, res) => {
  res.render('login', { 
    titulo: 'Login',
    ano: new Date().getFullYear()
  });
});

// Rota para a página de cadastro
app.get('/cadastro', (req, res) => {
  res.render('cadastro', {
    titulo: 'Cadastro',
    ano: new Date().getFullYear()
  });
});

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor rodando! Acesse http://localhost:8000/login para ver a página de login.');
});

const PORT = 8000;
const HOST = '0.0.0.0';
app.listen(PORT,HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}/`);
});
