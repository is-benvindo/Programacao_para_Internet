document.addEventListener('DOMContentLoaded', function () {
    var imagemSelecionada = document.getElementById('imagemSelecionada');
    var displayedImage = document.getElementById('displayedImage');

    imagemSelecionada.addEventListener('change', function () {
        var urlImagemSelecionada = imagemSelecionada.value;
        displayedImage.src = urlImagemSelecionada;

        displayedImage.style.display = 'block';
    });
});