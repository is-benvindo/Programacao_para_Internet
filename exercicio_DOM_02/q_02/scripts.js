document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
});

function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    var conteudoLimpo = conteudo.trim();

    if (conteudoLimpo === "") {
        error('snackbar', 'Insira algum texto!')
    } else {
        document.getElementById('conteudo').innerHTML = conteudoLimpo;
    }
}

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
