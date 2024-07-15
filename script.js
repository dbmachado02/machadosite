document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    const data = { nome, email, telefone, mensagem };

    fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('formResponse').innerText = data.msg;
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        document.getElementById('formResponse').innerText = 'Ocorreu um erro ao enviar a mensagem.';
    });
});
function mudarImagem(src) {
    var img = document.getElementById('imagem-principal');
    img.style.opacity = 0; // Desvanece a imagem principal
    setTimeout(function() {
        img.src = src;
        img.style.opacity = 1; // Volta a opacidade para 1
    }, 500); // Tempo de transição deve coincidir com o tempo de desvanecimento
}
