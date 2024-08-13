document.addEventListener('DOMContentLoaded', function () {
    var botaoCarregarImagem = document.getElementById('carregarImagem');
    botaoCarregarImagem.addEventListener('click', upload);
});

function upload() {
    var arquivoSelecionado = uploadImagem.files[0];

    if (!arquivoSelecionado) {
        showSnackbar('Nenhuma imagem selecionada.')
    }

    var img = document.createElement('img');
    img.src = URL.createObjectURL(arquivoSelecionado);
    img.style.maxWidth = '100%';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('resultado').appendChild(img);

    img.onload = function () {
        URL.revokeObjectURL(img.src);
    }
};

function showSnackbar(mensagem) {
    var snackbar = document.getElementById('snackbar');
    snackbar.textContent = mensagem;
    snackbar.className = 'snackbar show';
    setTimeout(function () {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}