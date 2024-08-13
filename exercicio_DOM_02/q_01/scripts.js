document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botaoErro').addEventListener('click', function () {
        error('mensagemErro', 'Erro inesperado');
    });
});

function error(id, mensagem) {
    var errorMessage = document.getElementById(id);
    errorMessage.textContent = mensagem;
    errorMessage.classList.remove('oculto');
    setTimeout(function () {
        errorMessage.classList.add('oculto');
    }, 3000);

    showSnackbar(mensagem);
}

function showSnackbar(mensagem) {
    var snackbar = document.getElementById('snackbar');
    snackbar.textContent = mensagem;
    snackbar.className = 'snackbar show';
    setTimeout(function () {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}