const formulario = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const mensagemErro = document.getElementById('mensagemErro');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const senha = senhaInput.value;

    if (!email || !senha) {
        mensagemErro.textContent = 'Preencha todos os campos.';
        return;
    }

    if (email === 'usuario@exemplo.com' && senha === 'senha123') {
        window.location.href = 'pagina-protegida.html';
    } else {
        mensagemErro.textContent = 'Email ou senha incorretos.';
    }
});
