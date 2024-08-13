document.addEventListener('DOMContentLoaded', function () {
    var botaoCalcular = document.getElementById('botaoCalcular');
    botaoCalcular.addEventListener('click', engajamentoPercentual);
});

function engajamentoPercentual() {
    var interacoes = parseFloat(document.getElementById('caixaDeTexto').value);
    var visualizacoes = parseFloat(document.getElementById('caixaDeTexto2').value);

    if (isNaN(interacoes) || isNaN(visualizacoes)) {
        error('snackbar', 'Digite apenas números!');
    } else if (visualizacoes === 0) {
        error('snackbar', 'O número de visualizações não pode ser zero!');
    } else {
        var taxaEngajamento = (interacoes / visualizacoes) * 100;
        document.getElementById('resultado').innerHTML = taxaEngajamento.toFixed(2) + '%';
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