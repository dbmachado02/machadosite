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
