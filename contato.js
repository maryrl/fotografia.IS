document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '+55 88 99774-6557'; // Substitua pelo número do profissional (formato: +55 11 99999-9999)
    const message = 'Olá, Maria Rodrigues gostaria de saber mais detalhes!'; // Mensagem padrão
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});