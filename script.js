// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert('Mensagem enviada com sucesso!'); // Alerta de sucesso
    this.reset(); // Limpa o formulário
});