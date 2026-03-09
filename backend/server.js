const express = require('express');
const app = express();
const port = 3000;

// Middleware para entender JSON (importante para APIs)
app.use(express.json());

// Rota inicial (Teste da API)
app.get('/', (req, res) => {
  res.send('API do Projeto E-Lixo Rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});