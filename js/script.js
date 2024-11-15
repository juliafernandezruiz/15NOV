document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío por defecto
    alert('Formulario enviado correctamente. ¡Gracias por tu mensaje!');
    this.reset(); // Reinicia el formulario
});