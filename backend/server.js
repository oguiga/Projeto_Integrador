const express = require("express");
const path = require("path");

const app = express();

// Permite o uso de JSON e dados do formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usuário e senha de exemplo para validação
const validUsername = "admin";
const validPassword = "123456";

// Rota para a página de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Rota para o dashboard, será acessada após login válido
app.get('/dash.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dash.html'));
});

// Rota para processar o login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Verifica se as credenciais são válidas
    if (username === validUsername && password === validPassword) {
        // Redireciona para o dashboard se o login for válido
        res.redirect('/dash.html');
    } else {
        // Retorna erro se as credenciais forem inválidas
        res.status(403).send('Credenciais inválidas');
    }
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
