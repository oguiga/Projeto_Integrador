document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Lógica do login (verificação simples)
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            if (username === "admin" && password === "123456") {
                // Redireciona para o dashboard após login bem-sucedido
                window.location.href = '/dash.html';
            } else {
                alert("Credenciais inválidas");
            }
        });
    }
});
